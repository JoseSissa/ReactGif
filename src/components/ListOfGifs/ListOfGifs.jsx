import React, { useEffect, useRef, useCallback } from 'react';
// El debounce es una librería que nos permite observar alguna función que se ejecuta muchas veces dentro de 
// determinado tiempo y retorna un sólo llamado de la misma al final
// Pasamos la función, un tiempo determinado, y si esa función es llamada 80 veces en ese tiempo
// al final de ese tiempo el debounce sólo hará un llamado a la misma, ahorro de recursos
// https://www.npmjs.com/package/just-debounce-it
import debounce from 'just-debounce-it';
import Gif from '../Gif/Gif';
import './ListOfGifs.css';
import { useGifs } from '../../hooks/useGifs';
import { useNearScreen } from '../../hooks/useNearScreen';
import { Helmet } from 'react-helmet';

function ListOfGifs({ params }) {
    const { keyword, rating = 'g', lang = 'en' } = params;
    const { loading, gifs, setPage } = useGifs(keyword, rating, lang);
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        distance: '100px',
        externalRef: loading ? null : externalRef,
        once: false
    });

    const title = gifs ? `${gifs.length} results of ${decodeURIComponent(keyword)}` : ''
    

    // const handleNextPage = () => setPage(prevPage => prevPage + 1)
    // const handleNextPage = () => console.log('Next Page');

    // El useCallback nos sirve para guardar una función entre renderizados, de tal forma que recuerde dicha
    // función y no la vuelva a crear entre renders, como 2do parámetro recibe un array de dependencias que nos
    // actualizará/volverá a crear la función cada vez que esas dependencias cambien (como el useEffect)
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1),
        500
    ), [])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen]);

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={title} />
            </Helmet>
            <h4 className='lastSearch'>Last search: {decodeURIComponent(keyword)}</h4>
            <div className='gallery'>
                {
                    loading
                        ? <div className="loading"><span className="loader"></span></div>
                        :
                        (gifs.map( ({title, id, url}, index) =>
                            <Gif 
                                key={`${id}${index}`}
                                id={id}
                                title={title}
                                url={url}
                            />)
                        )
                }
                <div id='visor' ref={externalRef}></div>
                {/* <br />
                <button onClick={handleNextPage}>Get next Page</button> */}
            </div>
        </>
    );
}

export { ListOfGifs };
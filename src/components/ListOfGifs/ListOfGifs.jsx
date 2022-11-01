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

function ListOfGifs({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs(keyword);
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        distance: '100px',
        externalRef: loading ? null : externalRef,
        once: false
    });

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
            <h4 className='lastSearch'>Last search: {keyword.includes('%20') ? keyword.replaceAll('%20', ' ') : keyword}</h4>
            <div className='gallery'>
                {
                    loading
                        ? <div className="loading"><span className="loader"></span></div>
                        : (gifs.map( ({title, id, url}, index) =>
                        <Gif 
                            key={`${id}${index}`}
                            id={id}
                            title={title}
                            url={url}
                        />
                    ))
                }
                <div id='visor' ref={externalRef}></div>
                {/* <br />
                <button onClick={handleNextPage}>Get next Page</button> */}
            </div>
        </>
    );
}

export { ListOfGifs };
import React from 'react';
import { Gif } from '../Gif/Gif';
import './ListOfGifs.css';
import { useGifs } from '../../hooks/useGifs';

function ListOfGifs({ params }) {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs(keyword);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <div className='gallery'>
            {
                loading
                    ? <div className='loading'>Cargando ...</div>
                    : (gifs.map( ({title, id, url}) =>
                    <Gif 
                        key={id}
                        id={id}
                        title={title}
                        url={url}
                    />
                ))
            }
            <br />
            <button onClick={handleNextPage}>Get next Page</button>
        </div>
    );
}

export { ListOfGifs };
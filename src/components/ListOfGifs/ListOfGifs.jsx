import React from 'react';
import { Gif } from '../Gif/Gif';
import './ListOfGifs.css';
import { useGifs } from '../../hooks/useGifs';

function ListOfGifs({ params }) {
    const { keyword } = params;
    const { loading, gifs } = useGifs(keyword);

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
        </div>
    );
}

export { ListOfGifs };
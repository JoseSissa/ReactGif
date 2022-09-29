import React from 'react';
import { Gif } from '../components/Gif/Gif';
import { useGifs } from '../hooks/useGifs';

function Home() {
    const { loading, gifs } = useGifs();

    return ( 
        <div className='gallery'>
            {
                loading
                    ? <div className='loading'>Cargando ...</div>
                    : (gifs.map(({id, title, url}) =>
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

export { Home };
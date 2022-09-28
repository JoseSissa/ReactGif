import React, { useState, useEffect } from 'react';
import { Gif } from '../Gif/Gif';
import { getGifs } from '../../services/getGifs.jsx';
import './ListOfGifs.css';

function ListOfGifs({ params }) {
    const { keyword } = params;
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword]);

    // There are two return because we have if/else condition.
    if (loading ) return <div className='loading'>Cargando ...</div>

    return ( 
        <div className='gallery'>
            {
                gifs.map(({id, title, url}) =>
                    <Gif 
                        key={id}
                        title={title}
                        url={url}
                    />
                )
            }
        </div>
    );
}

export { ListOfGifs };
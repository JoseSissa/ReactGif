import React, { useState, useEffect } from 'react';
import { Gif } from './Gif';
import { getGifs } from '../services/getGifs.jsx';

function ListOfGifs({ keyword }) {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs({ keyword })
            .then(gifs => setGifs(gifs));
    }, [keyword]);

    return ( 
        gifs.map(({id, title, url}) =>
            <Gif 
                key={id}
                title={title}
                url={url}
            />
        )
    );
}

export { ListOfGifs };
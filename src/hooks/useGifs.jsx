import React, { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

function useGifs( keyword = localStorage.getItem('lastKeyword')) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGifs( keyword )
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword]);

    return ( 
        { loading, gifs }
    );
}

export { useGifs };
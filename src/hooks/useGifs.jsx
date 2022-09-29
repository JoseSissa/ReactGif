import React, { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

// If keyword is Null, the value will take it from localstorage
function useGifs( keyword = localStorage.getItem('lastKeyword')) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getGifs( keyword )
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // It will Store the last search in localstorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword]);

    return ( 
        { loading, gifs }
    );
}

export { useGifs };
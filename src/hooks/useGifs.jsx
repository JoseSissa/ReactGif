import React, { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

function useGifs( keyword ) {

    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    // If keyword is null or empty, the value will take it from localstorage or will be random
    keyword = keyword || localStorage.getItem('lastKeyword') || "random";

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
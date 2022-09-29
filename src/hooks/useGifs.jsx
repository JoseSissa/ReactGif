import React, { useState, useEffect, useContext } from 'react';
import { getGifs } from '../services/getGifs';
import { GifsContext } from '../context/GifsContext.jsx';

function useGifs( keyword ) {

    // const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    const {gifs, setGifs} = useContext(GifsContext)

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
    }, [keyword, setGifs]);

    return ( 
        { loading, gifs }
    );
}

export { useGifs };
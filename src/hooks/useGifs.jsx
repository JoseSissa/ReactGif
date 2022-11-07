import React, { useState, useEffect, useContext } from 'react';
import { getGifs } from '../services/getGifs';
import { GifsContext } from '../context/GifsContext.jsx';

const INITIAL_PAGE = 0;

function useGifs( keyword, rating ) {

    const [page, setPage] = useState(INITIAL_PAGE);
    const [loading, setLoading] = useState(false);
    const {gifs, setGifs} = useContext(GifsContext)
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    // If keyword is null or empty, the value will take it from localstorage or will be random
    keyword = keyword || localStorage.getItem('lastKeyword') || "random";

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs, rating]);

    useEffect(() => {
        if(page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({ keyword, page, rating})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [page, keyword, setGifs, rating]);

    return ( 
        { loading, loadingNextPage, gifs, setPage }
    );
}

export { useGifs };
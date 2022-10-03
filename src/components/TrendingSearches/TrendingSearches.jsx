import React, { useState, useEffect } from 'react';
import { getTrendingGifsService } from '../../services/getTrendingGifsService';
import { Category } from '../Category/Category';

function TrendingSearches() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        getTrendingGifsService()
            .then(setTrending)
    }, []);
    console.log(trending);

    return <Category gifs={trending} />;
}

export { TrendingSearches };
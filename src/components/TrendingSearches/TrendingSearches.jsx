import React, { useState, useEffect } from 'react';
import { getTrendingGifsService } from '../../services/getTrendingGifsService';
import { Category } from '../Category/Category';

export default function TrendingSearches() {
    console.log('trending seraches');
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        getTrendingGifsService()
            .then(setTrending)
    }, []);

    return <Category gifs={trending} />;
};
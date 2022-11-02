import React, { useState, useEffect } from 'react';
import getSingleGif from '../services/getSingleGif';
import { useGifs } from './useGifs'

export default function useSingleGif({ id }) {
    const {gifs} = useGifs()
    const gifFromCache = gifs.find(elem => elem.id === id )

    const [gif, setGif] = useState(gifFromCache);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // Llamar al servcio si no tenemos gif
        if(!gif) {
            setIsLoading(true)
            getSingleGif({ id })
                .then(gif => {
                    setGif(gif)
                    setIsLoading(false)
                }).catch(err => {
                    setIsLoading(false)
                    setIsError(true)
                    console.log(err);
                })
        }
    }, [gif, id]);


    return { gif, isLoading, isError }
}
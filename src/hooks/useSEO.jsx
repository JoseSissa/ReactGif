import React, { useState, useEffect, useRef } from 'react';

export default function useSEO({ title }) {

    const prevTitle = useRef(document.title)

    useEffect(() => {
        const previousTitle = prevTitle.current
        document.title = `${title} | Giphy`

        return () => document.title = previousTitle
    }, [title]);
}
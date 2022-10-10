import React, { useState, useEffect } from 'react';
import { getTrendingGifsService } from '../../services/getTrendingGifsService';
import { Category } from '../Category/Category';

function TrendingSearches() {
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        getTrendingGifsService()
            .then(setTrending)
    }, []);

    return <Category gifs={trending} />;
};


// Con esta función queremos que la parte de los trending se muestre y por tanto se haga la petición a la API
// únicamente cuando la sección que tiene los trendings se muestre en pantalla, esto para evitar las cargar algo
// en pantalla cuando no se necesite
// se usará la API => INTRERSECTION OBSERVER MDN
function LazyTrending() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const callback = (entries) => {
            console.log(entries);
            const elem = entries[0];
            if(elem.isIntersecting) {
                console.log('Solicitando');
                setShow(true)
            }
        };
        const options = { rootMargin: '100px' }
        const observer = new IntersectionObserver(callback, options)

        observer.observe(document.getElementById('lazyTrending'));

    }, []);

    return <div id='lazyTrending'>
            {show ? <TrendingSearches /> : null}
        </div>

};



export { LazyTrending };
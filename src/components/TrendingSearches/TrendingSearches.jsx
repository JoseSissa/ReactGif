import React, { useState, useEffect, useRef } from 'react';
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

function useNearScreen() {
    const reference = useRef()
    const [isNearScreen, setShow] = useState(false);

    useEffect(() => {
        const callback = (entries, observer) => {
            const elem = entries[0];
            console.log('effect');
            if(elem.isIntersecting) {
                setShow(true)
                // Desconectamos el observer para que no siga observando el elemento luego de que el estado se haya cambiado a true, ahorrando recursos
                // Evitamos que se está ejecutando el setShow cuando ya no lo necesitamos
                observer.disconnect()
            }
        };
        const options = { rootMargin: '100px' }
        
        const observer = new IntersectionObserver(callback, options)

        observer.observe(reference.current);

        // cuando se ejecute el effect, nos devolverá la sgte función que nos limpiará el tema del observer
        // Evitamos que se está ejecutando el setShow cuando ya no lo necesitamos
        return observer.disconnect();

    }, []);

    return { isNearScreen, reference };
}

// Con esta función queremos que la parte de los trending se muestre y por tanto se haga la petición a la API
// únicamente cuando la sección que tiene los trendings se muestre en pantalla, esto para evitar las cargar algo
// en pantalla cuando no se necesite
// se usará la API => INTRERSECTION OBSERVER MDN
function LazyTrending() {

    const { isNearScreen, reference } = useNearScreen();

    return <div ref={reference}>
            { isNearScreen ? <TrendingSearches /> : null}
        </div>

};



export { LazyTrending };
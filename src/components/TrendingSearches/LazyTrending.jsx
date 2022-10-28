import React, { Suspense } from "react";
import { useNearScreen } from '../../hooks/useNearScreen.jsx';
import '../ListOfGifs/ListOfGifs.css'

// El lazy lo que nos permite es poder descargar el JS SÓLO cuando se necesite, 
// osea, hacemos un import dinámico, que nos devuelve una promesa
const TrendingSearches  = React.lazy(
    () => import('./TrendingSearches.jsx')
)

// Con esta función queremos que la parte de los trending se muestre y por tanto se haga la petición a la API
// únicamente cuando la sección que tiene los trendings se muestre en pantalla, esto para evitar las cargar algo
// en pantalla cuando no se necesite
// se usará la API => INTRERSECTION OBSERVER MDN
function LazyTrending() {
    const { isNearScreen, reference } = useNearScreen({ distance: '150px' });

    return <div ref={reference}>
        {/* Tenemos que envolver el componenete que se importará dinámicamente con el tag Suspense y definirle un fallback que será lo que se renderizará mientras se descargar el JS */}
        <Suspense fallback={<span className="loader"></span>}>
            { isNearScreen ? <TrendingSearches /> : <span className="loader"></span>}
        </Suspense>
    </div>

};



export { LazyTrending };
import React from "react";
import './Gif.css';
import { Link } from 'wouter';

function Gif({ id, title, url }) {
    return ( 
        <div className="gif">
            <Link href={`/detail/${id}`}>
                <img src={url} alt={title} className="gif-image" />
            </Link>
        </div>
     );
};
// React memo sirve para decirle a react que si las props no cambian, entonces no me renderices nuevamente le compoenente
// Si dentro de las props le pasamos un objeto, array o función, va a ignorar al memo debido a que va a mirar la referenncia del objeto y no su contenido
// Para evitar eso, hacemos una comparación de la id prop, donde si son iguales las pre y next prop significa que la porpo no ha cambiado y por lo cual no debería volver a renderizar el componente
export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id;
});
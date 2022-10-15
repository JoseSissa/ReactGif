import { useEffect, useState, useRef } from 'react';

function useNearScreen({ distance = '100px' } = {}) {
    const reference = useRef()
    const [isNearScreen, setShow] = useState(false);
    useEffect(() => {
        const callback = (entries, observer) => {
            const elem = entries[0];
            if(elem.isIntersecting) {
                setShow(true)
                // Desconectamos el observer para que no siga observando luego de que el estado se haya cambiado a true, ahorrando recursos
                // Evitamos que se está ejecutando el setShow cuando ya no lo necesitamos
                observer.disconnect()

                // Con esto dejamos de observar sólo un elemento, esto por si tenemos varios elementos que se estén observando
                // observer.unobserve()
            }
        };
        const options = { rootMargin: distance }
        
        const observer = new IntersectionObserver(callback, options)

        observer.observe(reference.current);

        // cuando se ejecute el effect, nos devolverá la sgte función que nos limpiará el tema del observer
        // Evitamos que se está ejecutando el setShow cuando ya no lo necesitamos
        // return observer.disconnect();

    }, []);

    return { isNearScreen, reference };
}

export { useNearScreen };
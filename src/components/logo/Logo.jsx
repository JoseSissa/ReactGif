import React, { useEffect, useRef, useContext } from 'react';
import { GifsContext } from '../../context/GifsContext.jsx';
import { Link } from "wouter";

function Logo() {
    const referenceHome = useRef()
    const {setShowButtonHome} = useContext(GifsContext)

    const callback = (entries, observer) => {
        const entry = entries[0]
        entry.isIntersecting ? setShowButtonHome(true) : setShowButtonHome(false)
    }
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(referenceHome.current)
    }, [setShowButtonHome]);

    return ( 
        <div className='logo'>
            <Link href='/'>
                <a id='logo' ref={referenceHome}><img src="/images/vite.svg" alt="Logo" /></a>
            </Link>
        </div>
     );
}

export default Logo;
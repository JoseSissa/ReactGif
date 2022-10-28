import React from 'react';
import { Link } from "wouter";

function Logo() {
    return ( 
        <Link href='/'>
            <a className='logo' id='home'><img src="/images/vite.svg" alt="Logo" /></a>
        </Link>
     );
}

export default Logo;
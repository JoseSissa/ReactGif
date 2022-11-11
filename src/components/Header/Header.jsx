import React from 'react';
import { Link, useLocation } from 'wouter'

import useUser from '../../hooks/useUser';
import './Header.css'

function Header() {
    // const isLogged = false
    const [, setLocation] = useLocation();
    const { isLogged, logout } = useUser()
    const handleClick = () => {
        logout()
        setLocation('/login')
    }
    return ( 
        <header className='gf-header'>
            {
                isLogged
                    ? <button onClick={handleClick}>
                        Logout
                    </button>
                    : <Link href='/login'>
                        <a>Login</a>
                    </Link>
            }
        </header>
     );
}

export default Header;
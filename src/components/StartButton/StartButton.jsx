import React, { useContext } from 'react';
import { GifsContext } from '../../context/GifsContext.jsx';
import './StartButton.css'

function StartButton() {
    const {showButtonHome} = useContext(GifsContext)
    if (!showButtonHome) {
        return(
            <a className='start-button'>
                <img src="../../../public/images/arrow-up.svg" alt="Arrow up" />
            </a>
        )
    }else{
        return null
    }
}

export default StartButton;
import React, { useContext } from 'react';
import { GifsContext } from '../../context/GifsContext.jsx';
import './StartButton.css'

function StartButton() {
    const {showButtonHome} = useContext(GifsContext)
    return(
        <a className={`start-button ${showButtonHome ? 'hide' : ''}`}>
            <img src="../../../public/images/arrow-up.svg" alt="Arrow up" />
        </a>
    )
}

export default StartButton;
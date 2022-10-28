import React from 'react';
import './StartButton.css'

function StartButton() {

    const goHome = () => {
        console.log('To do something');
    }

    return ( 
        <a href='#home' className='start-button'>
            <img src="../../../public/images/arrow-up.svg" alt="Arrow up" />
        </a>
     );
}

export default StartButton;
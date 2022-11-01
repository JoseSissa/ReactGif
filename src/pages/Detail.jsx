import React, { useContext, useState } from 'react';
import Gif from '../components/Gif/Gif.jsx';
import { GifsContext } from '../context/GifsContext.jsx';
import './pages.css'

function Detail({ params }) {

    const { gifs } = useContext(GifsContext);
    const gif = gifs.find(elem => elem.id === params.id);

    return ( 
        <>
            <h3>{gif.title}</h3>
            {/* <small><a href={gif.url}>{gif.url}</a></small> */}
            <div className='gifsDetail'>
                <Gif {...gif} />
            </div>
        </>
    );
}

export { Detail };
import React, { useContext, useState } from 'react';
import { Redirect } from 'wouter';
import Gif from '../components/Gif/Gif.jsx';
import { GifsContext } from '../context/GifsContext.jsx';
import useSingleGif from '../hooks/useSingleGif.jsx';
import './pages.css'

function Detail({ params }) {

    const { gif, isLoading, isError } = useSingleGif({id: params.id})

    if(isLoading) <div className="loading"><span className="loader"></span></div>
    if(isError) return <Redirect to='/404' />
    if(!gif) return null
    return ( 
        <>
            <h3>{gif.title}</h3>
            <div className='gifsDetail'>
                <Gif {...gif} />
            </div>
        </>
    );
}

export { Detail };
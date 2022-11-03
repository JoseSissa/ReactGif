import React, { useContext, useState } from 'react';
import { Redirect } from 'wouter';
import Gif from '../components/Gif/Gif.jsx';
import { GifsContext } from '../context/GifsContext.jsx';
import useSingleGif from '../hooks/useSingleGif.jsx';
import { Helmet } from 'react-helmet';
import Spinner from '../components/Spinner/Spinner'
import './pages.css'

function Detail({ params }) {

    const { gif, isLoading, isError } = useSingleGif({id: params.id})
    const title = gif ? gif.title : 'Title'

    if(isLoading) {
        <>
            <Helmet>
                <title>Cargando...</title>
            </Helmet>
            <Spinner />
        </>
    }
    if(isError) return <Redirect to='/404' />
    if(!gif) return null
    return ( 
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <h3>{gif.title}</h3>
            <div className='gifsDetail'>
                <Gif {...gif} />
            </div>
        </>
    );
}

export { Detail };
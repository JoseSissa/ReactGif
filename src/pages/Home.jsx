import React from 'react';
import Gif from '../components/Gif/Gif';
import { LazyTrending } from '../components/TrendingSearches/LazyTrending.jsx';
import { useGifs } from '../hooks/useGifs';
import { Link } from 'wouter'

function Home() {
    const { loading, gifs } = useGifs();
    const lastSearch = localStorage.getItem('lastKeyword')
    return ( 
        <>
            <h4 className='lastSearch'>Last search: <Link href={`/search/${lastSearch}`}>{lastSearch.replaceAll('%20', ' ')}</Link></h4>
            <div className='gallery'>
                {
                    loading
                        ? <div className="loading"><span className="loader"></span></div>
                        : (gifs.map(({id, title, url}, index) =>
                        <Gif 
                            key={`${id}${index}`}
                            id={id}
                            title={title}
                            url={url}
                        />
                    ))
                }
            </div>
            <LazyTrending />
        </>
     );
}

export { Home };
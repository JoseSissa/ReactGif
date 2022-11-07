import React from 'react';
import Gif from '../components/Gif/Gif';
import { LazyTrending } from '../components/TrendingSearches/LazyTrending.jsx';
import { useGifs } from '../hooks/useGifs';
import { Link } from 'wouter'
import Spinner from '../components/Spinner/Spinner';
import { Helmet } from 'react-helmet';

function Home() {
    const { loading, gifs } = useGifs();
    let lastSearch = localStorage.getItem('lastKeyword') || 'random'
    // lastSearch.
    return ( 
        <>
            <h4 className='lastSearch'>Last search: <Link href={`/search/${lastSearch}`}>{decodeURIComponent(lastSearch)}</Link></h4>
            <section className='home'>
                <Helmet>
                    <title>Home | Gif of Giphy</title>
                    <link rel="canonical" href="https://gifofgiphy.vercel.app/"></link>
                </Helmet>            
                <div className='gallery'>
                    {
                        loading
                            ? <Spinner />
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
            </section>
        </>
     );
}

export { Home };
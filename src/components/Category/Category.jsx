import React from 'react';
import './Category.css';
import { Link } from 'wouter';

function Category({ gifs }) {
    
    return (
        <aside className='trendings'>
            <h3>Trendings</h3>
            <ul>
                {
                    gifs.map(elem => (
                        <li key={elem.id} className="item">
                            <Link href={`/search/${elem.name}`}>
                                {(elem.name).toLowerCase()}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
     );
}

export { Category };
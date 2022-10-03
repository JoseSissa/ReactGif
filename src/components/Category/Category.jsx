import React from 'react';
import { Link } from 'wouter';

function Category({ gifs }) {
    
    return (
        <aside className='trendings'>
            <h3>Tendencias</h3>
            <ul>
                {
                    gifs.map(elem => (
                        <li key={elem.id}>
                            <Link href={`/search/${elem.name}`}>
                                {elem.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
     );
}

export { Category };
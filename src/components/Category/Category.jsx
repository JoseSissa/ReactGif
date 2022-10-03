import React from 'react';
import { Link } from 'wouter';

function Category({ gifs }) {
    for (const i of gifs) {
        console.log(i.name);
    }
    return (
        <div className='trendings'>
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
        </div>
     );
}

export { Category };
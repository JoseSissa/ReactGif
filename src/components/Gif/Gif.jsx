import React from "react";
import './Gif.css';
import { Link } from 'wouter';

function Gif({ id, title, url }) {
    return ( 
        <div className="gif">
            {/* <h4>{title}</h4> */}
            <Link href={`/detail/${id}`}>
                <img src={url} alt={title} className="gif-image" />
            </Link>
        </div>
     );
};

export default React.memo(Gif);
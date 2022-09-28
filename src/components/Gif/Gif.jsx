import React from "react";
import './Gif.css';

function Gif({ title, url }) {
    return ( 
        <div className="gif">
            {/* <h4>{title}</h4> */}
            <img src={url} alt={title} className="gif-image" />
        </div>
     );
};

export { Gif };
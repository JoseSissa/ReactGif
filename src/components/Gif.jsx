import React from "react";

function Gif({ title, url }) {
    return ( 
        <div>
            <h4>{title}</h4>
            <img src={url} alt={title} />
        </div>
     );
}

export { Gif };
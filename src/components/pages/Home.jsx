import React from 'react';
import { Link } from "wouter";

function Home() {
    return ( 
        <>
            <Link href='/search/metro'>metro</Link><br />
            <Link href='/search/skyrim'>Skyrim</Link><br />
            <Link href='/search/fallout'>fallout</Link><br />
        </>
     );
}

export { Home };
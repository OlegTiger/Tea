import axios from 'axios';
import React, {useEffect} from 'react';

import Header from './Header';
import Map from './Map';


export default function Home({allTea}) {


    return (
        <>
            <Header />
            <Map allTea={allTea} />
        </>
    );
}

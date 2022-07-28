import React from 'react';

import Header from './Header';
import Map from './Map';
import Footer from './Footer';

export default function Home({allTea}) {
    return (
        <>

            <Header />
            <Map allTea={allTea}/>
            <Footer />
        </>
    );
}

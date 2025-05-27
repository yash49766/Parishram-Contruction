import React from 'react';
import Header from "../../component/home/header.jsx";
import Delivery from "../../component/home/delivery.jsx";
import Whychoseus from "../../component/home/whychoseus.jsx";

function Home() {
    return (
        <>
            <Header/>
            <Delivery/>
            <Whychoseus/>
        </>
    );
}

export default Home;
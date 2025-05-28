import React from 'react';
import Header from "../../component/home/header.jsx";
import Delivery from "../../component/home/delivery.jsx";
import Whychoseus from "../../component/home/whychoseus.jsx";
import Exprienceara from "../../component/home/exprienceara.jsx";
import Testimonial from "../../component/home/testimonial.jsx";

function Home() {
    return (
        <>
            <Header/>
            <Whychoseus/>
            <Delivery/>
            <Testimonial/>
            <Exprienceara/>
        </>
    );
}

export default Home;
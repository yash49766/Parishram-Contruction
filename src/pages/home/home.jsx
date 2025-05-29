import React from 'react';
import Header from "../../component/home/header.jsx";
import Delivery from "../../component/home/delivery.jsx";
import Whychoseus from "../../component/home/whychoseus.jsx";
import Exprienceara from "../../component/home/exprienceara.jsx";
import Testimonial from "../../component/home/testimonial.jsx";
import Workshowcase from "../../component/home/workshowcase.jsx";
import Features from "../../component/home/features.jsx";
import Services from "../../component/home/services.jsx";
import Completedproject from "../../component/home/completedproject.jsx";

function Home() {
    return (
        <>
            <Header/>
            <Features/>
            <Services />
            <Completedproject/>
            <Delivery/>
            <Whychoseus/>
            <Testimonial/>
            <Workshowcase/>

            <Exprienceara/>
        </>
    );
}

export default Home;
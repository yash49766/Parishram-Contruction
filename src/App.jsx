import './App.css'
import {Box} from "@mui/material";
import {Routes, Route, useLocation} from "react-router-dom";
import React, {  useEffect } from 'react';
import Navbar from "./component/global/navbar.jsx";
import Home from "./pages/home/home.jsx";
import Fotter from "./component/global/fotter.jsx";
import Contact from "./pages/contact/contact.jsx";
import About from "./pages/about/about.jsx";
import Service from "./pages/services/service.jsx";
import Gallery from "./pages/gallery/gallery.jsx";

function App() {

    function ScrollToTop() {
        const {pathname} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    }

    return (
        <>
            <ScrollToTop/>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Service />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                {/* Add more routes here */}
            </Routes>
            <Fotter />
        </>
    )
}

export default App

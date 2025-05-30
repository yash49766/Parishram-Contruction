import React from 'react';
import Galleryy from "../../component/gallery/gallery.jsx";
import Header from "../../component/home/header.jsx";
import Headerr from "../../component/global/headerr.jsx";
import Img from "../../assets/home/img5.jpg";

function Gallery() {
    return (
        <>
            <Headerr
                heading={'Our Project Gallery'}
                subtext={'Explore a curated collection of our completed and ongoing construction projects — from residential builds to large-scale commercial developments.'}
                // buttonText={'View All Projects'}
                img={Img} // your banner or background image
            />

            <Galleryy />
        </>
    );
}

export default Gallery;
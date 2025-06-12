import React from 'react';
import Services from "../../component/services/services.jsx";
import Headerr from "../../component/global/headerr.jsx";
import Img from '../../assets/about/about-ph.jpg';
import Aboutt from "../../component/about/aboutt.jsx";

function About() {
    return (
        <>
            <Headerr heading={'Get to Know Us'}
                     subtext={'From our humble beginnings to our bold future — explore the story behind our brand.'}
                     // buttonText={'Our Story'}
                     // path={'/contact'}
                    img={Img}
            />
            <Aboutt/>
        </>
    );
}

export default About;
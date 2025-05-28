import React from 'react';
import Services from "../../component/services/services.jsx";
import Headerr from "../../component/global/headerr.jsx";
import Img from '../../assets/about/about-ph.jpg';
import Aboutt from "../../component/about/aboutt.jsx";

function About() {
    return (
        <>
            <Headerr heading={'Let’s Connect!'}
                    subtext={'Whether you\'re a brand, distributor, or curious snack lover — we’re here to help.'}
                    buttonText={'Contact'}
                     path={'/contact'}
                    img={Img}
            />
            <Aboutt/>
        </>
    );
}

export default About;
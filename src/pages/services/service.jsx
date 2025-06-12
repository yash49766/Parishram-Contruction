import React from 'react';
import Services from "../../component/services/services.jsx";
import Img from "../../assets/about/about-ph.jpg";
import Headerr from "../../component/global/headerr.jsx";
import Workingprocess from "../../component/services/workingprocess.jsx";
import Readytowork from "../../component/services/readytowork.jsx";

function Service() {
    return (
        <>
            <Headerr heading={'Our Services'}
                     subtext={'From innovative product development to seamless distribution — explore how we deliver excellence at every step.'}
                     buttonText={'Contact'}
                     path={'/contact'}
                     img={Img}
            />
        <Services/>
            <Workingprocess />
            <Readytowork />
        </>
    );
}

export default Service;
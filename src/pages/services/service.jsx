import React from 'react';
import Services from "../../component/services/services.jsx";
import Img from "../../assets/about/about-ph.jpg";
import Headerr from "../../component/global/headerr.jsx";
import Workingprocess from "../../component/services/workingprocess.jsx";
import Readytowork from "../../component/services/readytowork.jsx";

function Service() {
    return (
        <>
            <Headerr heading={'Let’s Connect!'}
                     subtext={'Whether you\'re a brand, distributor, or curious snack lover — we’re here to help.'}
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
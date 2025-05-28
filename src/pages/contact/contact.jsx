import React from 'react';
import Contactus from "../../component/contactus/contactus.jsx";
import Headerr from "../../component/global/headerr.jsx";
import Img from "../../assets/contact/inner_new09.jpg";

function Contact() {
    return (
        <>
            <Headerr heading={'Get in Touch'}
                     subtext={'Have questions, feedback, or just want to say hello? We’re here to listen and help.'}
                     buttonText={'Send Message'}
                     img={Img}
            />
        <Contactus/>
        </>
    );
}

export default Contact;
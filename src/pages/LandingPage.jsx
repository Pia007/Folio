import React from 'react';
// import Typed from 'react-typed';
import { SEO } from '../components/SEO';
// import { useNavigate } from 'react-router-dom';
import { Intro } from '../components/Intro';
import Skills from '../components/Icons';

//import react typed text component after installing it via yarn add react-typed
// the added the Typed component to the header component
// gave the className  and added the string array with the strings that I want to see
// typed text is moving to fast and its stops at the end. Want to loop through the text
// added 30 as typeSpeed and 40 as backSpeed
// then added the loop attribute to the Typed component

const Home = () => {
    // let navigate = useNavigate();

    // const handleContactClick = () => {
    //     navigate("/contact");
    // }
    return (
        <div className='container' style={{overflowX: 'hidden'}}>
            <SEO title='Landing Page | Pia Torain' description="Landing page of Pia Torain's portfolio website" />
            <div className="m-0 p-auto align-self-center" style={{height: '90vh', border: '3px solid white'}}>
                <Intro />
                {/* <Skills /> */}
            </div>
        </div>
    );
};

export default Home;

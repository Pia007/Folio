import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

//import react typed text component after installing it via yarn add react-typed
// the added the Typed component to the header component
// gave the className  and added the string array with the strings that I want to see
// typed text is moving to fast and its stops at the end. Want to loop through the text
// added 30 as typeSpeed and 40 as backSpeed
// then added the loop attribute to the Typed component

const Home = () => {
    return (
        <div className="row row-content header-wrapper ">
            <div className="main-info">
                <h1><Typed 
                    className='typed-header'
                    strings={["Hi! I'm Pia Torain"]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                    />
                </h1>
                <Typed 
                    className='typed-text'
                    strings={["Frontend Developer", "Web Designer"]}
                    typeSpeed={60}
                    backSpeed={40}
                    loop
                />
                <Link to="/Contact" className="btn btn-primary btn-lg contactMe">Contact Me</Link>
            </div>
        </div>
    );
};

export default Home;

import React from 'react';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';


const Home = () => {
    return (
        <div className='container' style={{overflowX: 'hidden'}}>
            <SEO title='Landing Page | Pia Torain' description="Landing page of Pia Torain's portfolio website" />
            <div >
                <Intro/>
            </div>
        </div>
    );
};

export default Home;

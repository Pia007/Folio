import React from 'react';
import { SEO } from '../components/SEO';
import { Intro } from '../components/Intro';


const Home = () => {
    return (
        <div className='container' style={{overflowX: 'hidden', width: '90vw'}}>
            <SEO title='Landing Page | Pia Torain' description="Landing page of Pia Torain's portfolio website"/>
            <div className='px-3 px-md-2'>
                <Intro/>
            </div>
        </div>
    );
};

export default Home;

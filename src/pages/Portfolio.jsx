// import { useState } from 'react';
import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import ProjectCards from '../components/ProjectCards';

const Portfolio = () => {
    return (
        <div className='container'>
            <SEO title='Portfolio | Pia Torain' description='description' content="Pia Torain's Portfolio" />
            <PageTitle regText="MY" colorText="PORTFOLIO" />
            <ProjectCards />
        </div>
    );
}

export default Portfolio;

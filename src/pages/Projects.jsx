// import { useState } from 'react';
import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import ProjectCards from '../components/ProjectCards';

const Projects = () => {
    return (
        <div className='container'>
            <SEO title='Portfolio | Pia Torain' description='description' content="Pia Torain's Portfolio" />
            <PageTitle regText="MY" colorText="PROJECTS" />
            <ProjectCards />
        </div>
    );
}

export default Projects;

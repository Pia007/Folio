import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import Current from '../components/Current';
import ProjectCards from '../components/ProjectCards';

const Projects = () => {
    return (
        <div className='container'>
            <SEO title='Portfolio | Pia Torain' description='description' content="Pia Torain's Portfolio" />
            <PageTitle regText="MY" colorText="PROJECTS" />
            <Current />
            <ProjectCards />
        </div>
    );
}

export default Projects;

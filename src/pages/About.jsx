import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import { Row } from 'reactstrap';
import Info from '../components/Info';
import Skills from '../components/Skills';

const About = () => {

    return (
        <div className='container'>
            <SEO title='About | Pia Torain' description='description' content='About Pia Torain, Fullstack Web Developer'/>
            <PageTitle regText='ABOUT' colorText='PIA'/>
            <div className='container'>
                <Row>
                    <Info/>
                </Row>
                <Row>
                    <Skills/>
                </Row>
            </div>
        </div>
    )
}

export default About

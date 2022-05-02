import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import { Row } from "reactstrap";
import Info from '../components/Info';

const About = () => {

    return (
        <div className='container'>
            <SEO title='About | Pia Torain' description='description' content='About Pia Torain, Fullstack Web Developer' />
            <PageTitle regText="ABOUT" colorText="ME"/>
            <div className="container">
                <Row className="row-content">
                    <Info />
                </Row>
            </div>
            
        </div>
    )
}

export default About

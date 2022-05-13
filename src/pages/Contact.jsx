import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import ContactInfo from '../components/ContactInfo';
import { Row, Col } from 'reactstrap';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className='container'>
            <SEO title='Contact | Pia Torain' description='description' content='Contact Pia Torain, Fullstack Web Developer'/>
            <PageTitle regText="LET'S" colorText='CHAT'/>
            <div className='container mt-3 p-2 form-holder'>
                <Row>
                    <Col lg={4} className='mb-2 mb-lg-0'>
                        <ContactInfo/>
                    </Col>
                    <Col lg={8} >
                        <ContactForm/> 
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact

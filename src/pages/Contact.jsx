import PageTitle from '../components/PageTitle';
import ContactInfo from '../components/ContactInfo';
import { Row, Col } from 'reactstrap';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className='container'>
            <PageTitle regText="LET'S" colorText='CHAT'/>
            <div className='container mt-3 p-2 formHolder'>
                <Row className=''>
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

import { useState } from "react";
import PageTitle from "../components/PageTitle";
import ContactInfo from "../components/ContactInfo";
import { Row, Col } from "reactstrap";
import ContactMe from "../components/ContactMe";
import ContactForm from "../components/ContactForm";
import ConForm from "../components/ConForm";

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div className="container">
            <PageTitle regText="LET'S" colorText="CHAT"/>
            {/* <Row className="row">
                <h1 className="title text-center">LET'S <span className="text-primary ">CHAT</span></h1>
            </Row> */}
            
            <div className="container p-2 formHolder">
                <Row className="">
                    <Col lg={5} className='mb-2 mb-lg-0'>
                        <ContactInfo />
                    </Col>
                    <Col lg={7} >
                        <ContactForm submitForm={submitForm}/> 
                        {/* <ContactMe /> */}
                        {/* <ConForm /> */}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact

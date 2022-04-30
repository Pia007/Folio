import PageTitle from "../components/PageTitle";
import ContactInfo from "../components/ContactInfo";
import { Row, Col } from "reactstrap";
import ContactMe from "../components/ContactMe";

const Contact = () => {
    
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
                        <ContactMe/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact

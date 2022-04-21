import PageTitle from "../components/PageTitle";
import ContactInfo from "../components/ContactInfo";
import ContactMe from "../components/ContactMe";
import { Row, Col } from "reactstrap";

const Contact = () => {
    
    return (
        <div className="container">
            <PageTitle regText="LET'S" colorText="CHAT"/>
            {/* <Row className="row">
                <h1 className="title text-center">LET'S <span className="text-primary ">CHAT</span></h1>
            </Row> */}
            
            <div className="container px-2">
                <Row className="formHolder">
                    <Col lg={4} >
                        <ContactInfo />
                    </Col>
                    <Col lg={8}>
                        <ContactMe />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Contact

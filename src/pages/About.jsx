import { useNavigate } from "react-router-dom";
import { SEO } from '../components/SEO';
import PageTitle from '../components/PageTitle';
import Info from '../components/Info';
import Skills from "../components/Icons";
import { Row, Col } from "reactstrap";

// import { Button } from "reactstrap";

// Testing this just to do a commiit

const About = () => {
    let navigate = useNavigate();

    const handleContactClick = () => {
        navigate("/contact");
    }
    const handlePortfolioClick = () => {
        navigate("/portfolio");
    }

    return (
        <div className='container'>
            <SEO title='About | Pia Torain' description='description' content='About Pia Torain, Fullstack Web Developer' />
            <PageTitle regText="ABOUT" colorText="ME"/>
            <div className="container">
                <Row className="row-content">
                    <Info />
                </Row>
                <Row>
                    <h1 className=""><span>Skills & Technologies</span>
        
                    </h1>
                </Row>
                <Row className="justify-content-center">
                    <Skills />
                    
                </Row>
                <Row className="row-content">
                    <Col>
                        <button className="btn btn-primary">
                            Resume
                        </button>
                    </Col>
                    <Col>
                        <button className="btn btn-primary" onClick={()=> handleContactClick()}>
                            Contact
                        </button>
                    </Col>
                    <Col>
                        <button className="btn btn-primary" onClick={()=> handlePortfolioClick()}>
                            Portfolio
                        </button>
                    </Col>
                </Row>
            </div>
            
        </div>
    )
}

export default About

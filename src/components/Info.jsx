import { NavLink } from 'react-router-dom';
import { Row, Col } from "reactstrap";
import myPic from '../images/female1.png';

const Info = () => {

    return (
        <div className='container '>
            <Row className="justify-content-between p-2">
                <Col md={4} className="text-center p-2">
                    <Col  className=''>
                        <img 
                            src={myPic}  
                            alt='Pia Torain'
                            className="img-fluid " 
                            style={{ borderRadius: '50%', border: '3px solid #fff' }}
                        />
                    </Col>
                    <Col className='my-2'>
                        <button className="btn btn-primary">
                            <span>Resume </span>
                            <i className='fa fa-download '/>
                        </button>
                    </Col>
                </Col>          
                <Col md={8} className=" mt-md-0 p-2 ">
                    <div className='m-2' >
                        <h3 className='aboutIntro'>A curiously-creative Frontend Developer.</h3>
                        <p className="mb-2 text">
                            I'm passionate about solving problems in a human-centric way. I combine my loves for art, science, technology and mindfulness meditation to create beautiful, useful solutions and write clean accessible code. 
                            I really sweat the small stuff because it matters to be aware of people and their needs.
                        </p> 
                        <p className='mb-2 text'>
                            I have a BA in Biochemistry and Molecular Biology from <span className='text-primary'>Drew University</span>, a Certificate in Fullstack Web Development from <span className='text-primary'>
                            Nucamp Coding Bootcamp</span>, and a Frontend Web Developer Certificate from <span className='text-primary'>Reskill Americans</span>.
                        </p> 
                        <p className='mb-2 text'>
                            Being creative, learning, engaging and solving problems make me happy. Currently, I am seeking a position as a Junior Software Developer. 
                            If you think that I can help solve a problem or you just want to say, "Hi", feel free to contact me.  
                        </p> 
                        <NavLink tag='link' className="nav-link text-primary mx-0 p-0"  to="/contact"> 
                            <u><em><h5>Get in Touch!</h5></em></u>
                        </NavLink>
                    </div>
                </Col>
            </Row>
            <hr  className='mx-auto my-4 text-primary col-8'/>
        </div>
    )
}

export default Info;
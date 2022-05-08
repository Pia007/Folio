import { NavLink, Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import myPic from '../images/female1.png';
import download from '../images/download.svg';
import view from '../images/view.svg';

const Info = () => {

    return (
        <div className='container'>
            <Row className='justify-content-between p-2 mt-3'>
                <Col md={4} className='text-center p-2'>
                    {/* IMAGE */}
                    <Col>
                        <img 
                            src={myPic}  
                            alt='Pia'
                            className='img-fluid ' 
                            style={{ borderRadius: '50%', border: '3px solid #fff' }}
                        />
                    </Col>
                    <Col className='my-2'>
                    {/* CV OPTIONS */}
                    <div className='mx-1 my-0'><p className='text my-1'>Resume/CV: </p></div>
                            <div className='d-flex justify-content-center'>
                            <div className='mx-1'>
                                <Link className='btn btn-outline-primary p-1 resBtn' to='/resume'>
                                    <img src={view} alt='view resume' className='resImg'/>
                                </Link>
                            </div >
                            <div className='mx-1'>
                                <button className='btn btn-outline-primary p-1 resBtn'>
                                    <a href='resume.pdf' download='resume.pdf' alt='download-resume'>
                                        <img src={download} alt='download-resume' className='resImg'/>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Col>

                {/* ABOUT  */}
                <Col md={8} className='mt-md-0 p-2'>
                    <div className='m-2' >
                        <h2 className='about-intro'>A curiously-creative Frontend Developer.</h2>
                        <p className='mb-2 text'>
                            I'm passionate about solving problems in a human-centric way. I combine my loves for art, science, technology and mindfulness meditation to create beautiful, useful solutions and write clean accessible code. 
                            I really sweat the small stuff because it matters to be aware of people and their needs.
                        </p> 
                        <p className='mb-2 text'>
                            I have a Certificate in Fullstack Web and Mobile Development from <span className='text-primary'>
                            Nucamp Coding Bootcamp</span>, a Frontend Web Developer Certificate from <span className='text-primary'>Reskill Americans</span>, 
                            an AS in Chemistry from <span className='text-primary'>Union County College</span> and a BA in Biochemistry and Molecular Biology from <span className='text-primary'>Drew University</span>.
                        </p> 
                        <p className='mb-2 text'>
                            Being creative, learning, engaging and thinking outside the box to solve problems really makes me happy. Currently, I am seeking a position as a Junior Software Developer. 
                            If you think that I can help solve a problem, or, you just want to say, 'Hi', feel free to contact me!  
                        </p> 
                        <NavLink tag='link' className='nav-link text-primary mx-0 p-0'  to='/contact'> 
                            <u><em><h3 style={{ fontWeight: '500'}}>Get in Touch!</h3></em></u>
                        </NavLink>
                    </div>
                </Col>
            </Row>
            <hr  className='mx-auto my-4 text-primary col-8'/>
        </div>
    )
}

export default Info;
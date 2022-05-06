import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Modal, ModalHeader, ModalBody} from "reactstrap";
import Resume from './Resume';
import myPic from '../images/female1.png';
import download from '../images/download.svg';
import view from '../images/view.svg';

const Info = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

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
                    <div className='mx-1 my-0'><p className='text my-1'>Resume/CV: </p></div>
                            <div className='d-flex justify-content-center'>
                            <div className='mx-1'>
                                <button className="btn btn-outline-primary p-1 resBtn" onClick={toggleModal}>
                                    <img src={view} alt='view resume'/>
                                </button>
                            </div >
                            <div className='mx-1'>
                                <button className="btn btn-outline-primary p-1 resBtn">
                                    <img src={download} alt='download-resume'/>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Col>

                <Modal size='lg' centered scrollable isOpen={modal} toggle={toggleModal} className='modal-info' style={{borderRadius: '10px'}}>
                    <ModalHeader toggle={toggleModal}></ModalHeader>
                    <ModalBody>
                        <Resume />
                    </ModalBody>
                </Modal>

                <Col md={8} className=" mt-md-0 p-2 ">
                    <div className='m-2' >
                        <h3 className='aboutIntro'>A curiously-creative Frontend Developer.</h3>
                        <p className="mb-2 text">
                            I'm passionate about solving problems in a human-centric way. I combine my loves for art, science, technology and mindfulness meditation to create beautiful, useful solutions and write clean accessible code. 
                            I really sweat the small stuff because it matters to be aware of people and their needs.
                        </p> 
                        <p className='mb-2 text'>
                            I have a Certificate in Fullstack Web and Mobile Development from <span className='text-primary'>
                            Nucamp Coding Bootcamp</span>, a Frontend Web Developer Certificate from <span className='text-primary'>Reskill Americans</span>, 
                            an AS in Chemistry from <span className='text-primary'>Union County College</span> and a BA in Biochemistry and Molecular Biology from <span className='text-primary'>Drew University</span>.
                        </p> 
                        <p className='mb-2 text'>
                            Being creative, learning, engaging and solving problems make me happy. Currently, I am seeking a position as a Junior Software Developer. 
                            If you think that I can help solve a problem, or you just want to say, "Hi", feel free to contact me.  
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
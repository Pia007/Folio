import { useState } from "react";
import emailjs from "emailjs-com";

import { useRef } from "react";
import { Form, FormGroup, Input, List, ListInlineItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5okl2sw', 'template_2h8qlpo', form.current, 'user_KMa2QHJhjwfiOGxac6iEd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="title text-center">LET'S <span className="text-primary ">CHAT</span></h1>
            </div>
            
            <div className="row">
                <div className="col-lg-4">
                    <p className="contactText">
                        Reach out if you have any questions or just want to say, "Hi"! I am open to
                        discussing new projects and opportunities.
                    </p>
                    <div className="row">
                        <div className="d-flex">
                            <p className="">
                                <FontAwesomeIcon icon={faEnvelope} className="icons mail text-primary"/> 
                            </p>
                            <a className="px-1 py-1 mb-2 contactText" href="mailto:info@hostahealthcareheroes.org"> piatorain@yahoo.com </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex">
                            <p className="">
                                <FontAwesomeIcon icon={faPhoneSquare} className="icons phone text-primary"/> 
                            </p>
                            <a role="button" className="px-1 py-1 mb-2 contactText text-decoration-none" href="tel:+19084005335" >(908) 400-5335</a>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="social-holder">
                            <List className="horizonatal list-unstyled mb-4 mb-lg-1 social-ul">
                                <ListInlineItem  className="mx-1">
                                    <a className="btn btn-outline-primary social-link align-content-center p-0" title="LinkedIn"  href="https://www.linkedin.com/in/pia-torain-dev/"alt="LinkedIn" >
                                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icons linkedin"/>
                                    </a>
                                </ListInlineItem>
                                <ListInlineItem  className="mx-1">
                                    <a className="btn btn-outline-primary social-link align-content-center p-0" title="GitHub"  href="https://github.com/Pia007/Pia007 social github" alt="GitHub">
                                        <FontAwesomeIcon icon={faGithub} className="social-icons github"/> 
                                    </a>
                                </ListInlineItem>
                                <ListInlineItem className="mx-1">
                                    <a className="btn btn-outline-primary social-link align-content-center p-0" title="Twitter" href="https://twitter.com/FeenixRizn social" alt="Twitter">
                                        <FontAwesomeIcon icon={faTwitter} className="social-icons twitter"/>
                                    </a>
                                </ListInlineItem>
                            </List>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-8">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <FormGroup className="col-md-4">
                                <Input 
                                    className="border border-primary" 
                                    type="text"  
                                    id="name" 
                                    name="name" 
                                    placeholder="Name" 
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}   
                                />
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <Input 
                                    className="border 
                                    border-primary contactInput" 
                                    type="text"  
                                    id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup className="col-md-4">
                                <Input 
                                    className="border 
                                    border-primary" 
                                    type="text"  
                                    id="subject" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    // value={subject}
                                    // onChange={(e) => setSubject(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <textarea 
                                    className="form-control border border-primary textBox" 
                                    type="text"  
                                    id="message" 
                                    name="message" 
                                    placeholder="Message..." 
                                    rows="5" 
                                    // value={message}
                                    // onChange={(e) => setMessage(e.target.value)}
                                >
                                </textarea>
                            </FormGroup>
                            <FormGroup >
                                <button 
                                    type="submit" 
                                    className="btn btn-primary submitBtn"
                                    value="Send Email"
                                >
                                    Send Email
                                </button>

                            </FormGroup>
                            <FormGroup>
                                <span
                                    className={sendEmail ? 'visible' : null}
                                >
                                    Thank you for contacting me! I will get back to you as soon as possible.
                                </span>
                            </FormGroup>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

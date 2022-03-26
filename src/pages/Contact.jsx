

import { useRef } from "react";
import emailjs from "emailjs-com";
import { FormGroup, Input, ListGroupItem, Button} from "reactstrap";

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
            
            <div className="row p-2 formHolder">
                <div className="col-lg-4 p-2">
                    <p className="contactText">
                        Reach out if you have any questions or just want to say, "Hi"! I am open to
                        discussing new projects and opportunities.
                    </p>
                    <div className="row">
                        <div className="d-flex">
                            <p className="">
                                <i className="fa fa-envelope-o fa large text-primary"/> 
                            </p>
                            <a className="px-1 py-1 mb-2 contactText" href="mailto:info@hostahealthcareheroes.org"> piatorain@yahoo.com </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex">
                            <p className="">
                                <i className="fa fa-phone fa-lg text-primary"/>
                            </p>
                            <a role="button" className="px-1 py-1 mb-2 contactText text-decoration-none" href="tel:+19084005335" >(908) 400-5335</a>
                            
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <div horizontal className="d-flex d-inline-flex justify-content-between list-unstyled mb-3 mb-lg-1 shadow-none social-ul" id="social-list">
                                <ListGroupItem className="p-0 px-1 socialGroup">
                                    <a className="btn btn-outline-white social-link align-content-center p-0" title="LinkedIn"  href="https://www.linkedin.com/in/pia-torain-dev/" alt="LinkedIn" >
                                        <i className="fa fa-linkedin fa-lg social-icons linkedin"/>
                                    </a>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 px-1 socialGroup">
                                    <a className="btn btn-outline-white social-link align-content-center p-0 social github" title="GitHub"  href="https://github.com/Pia007/Pia007" alt="GitHub">
                                        <i className="fa fa-github fa-lg social-icons github"/>
                                    </a>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 px-1 socialGroup">
                                    <a className="btn btn-outline-white social-link align-content-center p-0 social twitter" title="Twitter" href="https://twitter.com/FeenixRizn" alt="Twitter">
                                        <i className="fa fa-twitter fa-lg social-icons twitter"/>
                                    </a>
                                </ListGroupItem>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-8 ">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row p-2 ">
                            <FormGroup className="col-md-4 mb-3">
                                <Input 
                                    className="contactInput form-control-lg px-1 pr-1  "
                                    htmlFor="name"
                                    aria-label="name" 
                                    type="text"  
                                    id="name" 
                                    name="name" 
                                    placeholder="Name" 
                                    // value={name}
                                    // onChange={(e) => setName(e.target.value)}   
                                />
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Input 
                                    className="contactInput form-control-lg px-1 pr-1 shadow-none" 
                                    htmlFor="email"
                                    aria-label="email"
                                    type="text"  
                                    id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Input 
                                    className="contactInput form-control-lg px-1 pr-1 border-left-0 shadow-none" 
                                    htmlFor="subject"
                                    aria-label="subject"
                                    type="text"  
                                    id="subject" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    // value={subject}
                                    // onChange={(e) => setSubject(e.target.value)}
                                />
                            </FormGroup >
                            <FormGroup className="mb-2 mb-3">
                                <textarea
                                    className="form-control mb-3 px-1 pr-1 textBg shadow-none" 
                                    htmlFor="message"
                                    aria-label="message"
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
                                <Button
                                    color="primary"
                                    type="submit" 
                                    className="btn"
                                    value="Send Email"
                                >
                                    Send Email
                                </Button>

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

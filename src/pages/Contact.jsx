

import { useRef } from "react";
import emailjs from "emailjs-com";
import { Form, FormGroup, Input, ListGroup, ListGroupItem, Button, InputGroup, InputGroupText} from "reactstrap";

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
                            <ListGroup horizontal className="d-flex d-inline-flex justify-content-between list-unstyled mb-3 mb-lg-1 shadow-none social-ul">
                                <ListGroupItem className="p-0 px-1">
                                    <a className="btn btn-outline-primary social-link align-content-center p-0" title="LinkedIn"  href="https://www.linkedin.com/in/pia-torain-dev/" alt="LinkedIn" >
                                        <i className="fa fa-linkedin fa-lg social-icons linkedin"/>
                                    </a>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 px-1">
                                    <a className="btn btn-outline-primary social-link align-content-center p-0 social github" title="GitHub"  href="https://github.com/Pia007/Pia007" alt="GitHub">
                                        <i className="fa fa-github fa-lg social-icons github"/>
                                    </a>
                                </ListGroupItem>
                                <ListGroupItem className="p-0 px-1">
                                    <a className="btn btn-outline-primary social-link align-content-center p-0 social twitter" title="Twitter" href="https://twitter.com/FeenixRizn" alt="Twitter">
                                        <i className="fa fa-twitter fa-lg social-icons twitter"/>
                                    </a>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-8">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <InputGroup >
                                    {/* <InputGroupAddon addonType="prepend" className="inputAddon"> */}
                                        <InputGroupText className="shadow-none border-left-0 bg-black">
                                            <i className="fa fa-user fa-lg text-primary"/>
                                        </InputGroupText>
                                    {/* </InputGroupAddon> */}
                                    <Input 
                                        className="contactInput form-control-lg px-0 pr-1 border-left-0 border-primary bg-black" 
                                        type="text"  
                                        id="name" 
                                        name="name" 
                                        placeholder="Name" 
                                        // value={name}
                                        // onChange={(e) => setName(e.target.value)}   
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                            <InputGroup >
                                    {/* <InputGroupAddon addonType="prepend" className="inputAddon"> */}
                                        <InputGroupText className="shadow-none border-left-0  bg-black">
                                            <i className="fa fa-envelope fa-sm text-primary"/>
                                        </InputGroupText>
                                    {/* </InputGroupAddon> */}
                                    <Input 
                                        className="contactInput form-control-lg border-left-0 border-primary px-0 pr-1 bg-black shadow-none" 
                                        type="text"  
                                        id="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                    />
                                    </InputGroup>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <InputGroup >
                                    {/* <InputGroupAddon addonType="prepend" className="inputAddon"> */}
                                        <InputGroupText className="shadow-none border-left-0  bg-black">
                                            <i className="fa fa-sticky-note text-primary"/>
                                        </InputGroupText>
                                    {/* </InputGroupAddon> */}
                                    <Input 
                                        className="contactInput form-control-lg px-1 pr-1 border-left-0 border-primary bg-black shadow-none" 
                                        type="text"  
                                        id="subject" 
                                        name="subject" 
                                        placeholder="Subject" 
                                        // value={subject}
                                        // onChange={(e) => setSubject(e.target.value)}
                                    />
                                </InputGroup>
                            </FormGroup >
                            <FormGroup className="mb-2 mb-3">
                                <InputGroup >
                                    {/* <InputGroupAddon addonType="prepend" className="inputAddon addon-textBox"> */}
                                        <InputGroupText className="shadow-none border-left-0 bg-black addon-textBox">
                                            <i className="fa fa-pencil text-primary align-self-start"/>
                                        </InputGroupText>
                                    {/* </InputGroupAddon> */}
                                    <textarea
                                        className="form-control mb-3 border-left-0 border-primary px-0 pr-1 textBg bg-black shadow-none" 
                                        type="text"  
                                        id="textara" 
                                        name="message" 
                                        placeholder="Message..." 
                                        rows="5" 
                                        // value={message}
                                        // onChange={(e) => setMessage(e.target.value)}
                                    > 
                                    </textarea>
                                </InputGroup>
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

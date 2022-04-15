import { useRef } from "react";
import emailjs from "emailjs-com";
import { Row, Col, FormGroup, Input, Button} from "reactstrap";

const ContactForm = () => {
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
        <Col lg={8} className="">
            <form ref={form} onSubmit={sendEmail}>
                <Row className="p-2">
                    <FormGroup className="col-md-4 mb-3">
                        <Input 
                            className="contactInput form-control-lg px-1 pr-1  "
                            htmlFor="name"
                            aria-label="name" 
                            type="text"  
                            id="name" 
                            name="name" 
                            placeholder="Name" 
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
                    <FormGroup className="d-flex justify-content-end">
                        <Button
                            color=""
                            // type="submit" 
                            className="btn btn-outline-secondary text-light sendBtn"
                            value="Send Email"
                        >
                            <div className="sendBox">
                                Send Email
                            </div>
                            
                        </Button>
                    </FormGroup>
                    <FormGroup>
                        <span
                            className={sendEmail ? 'visible' : null}
                        >
                            Thank you for contacting me! I will get back to you as soon as possible.
                        </span>
                    </FormGroup>
                </Row>
            </form>
        </Col>
    )
}

export default ContactForm

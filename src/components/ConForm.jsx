import { useState } from 'react';
import emailjs from 'emailjs-com';
import * as EmailValidator from 'email-validator';
import { computedTypesResolver} from '@hookform/resolvers/computed-types';
import Schema, { string } from 'computed-types';
import { useForm } from 'react-hook-form';
import { Row, Col, FormGroup, Input, FormFeedback} from "reactstrap";
import { ToastContainer, toast, Zoom } from 'react-toastify';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;
const contactToastId = 'contact-toast-id';

const ConForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function Email(input: unknown): string {
        if(!EmailValidator.validate(String(input))) {
            throw new TypeError(`Invalid email address: ${input}`);
        }
        return input;
    }
    
    const schema = Schema({
        name: string.min(3).max(30).error('Name is required'),
        email: Email,
        subject: string.min(3).max(15).error('Subject is required'),
        message: string.min(5).max(250).error('Message is required'),
    });

    const { register, handleSubmit, formState: {errors}, } = useForm({
        resolver: computedTypesResolver(schema),
    });

    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    const showToast = () => {
        toast.success(`${name}, your message has been sent! We will get back to you shortly.`, {
            // position: toast.POSITION.BOTTOM_CENTER,
            toastId: contactToastId,
        });
        
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
            // templateID,
            // templateParams,
            // userID

            ).then(
                function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    response.status(400).send({ message: 'message sent' });
                    showToast();
                },
                function (error) {
                    console.log('FAILED...', error);
                }
        
            ).catch((err)=> console.log(`cannot send${err}`))

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (

        <div className="container p-0 md-px-0">
            <Col className="">
                {/* <div className="contactForm"> */}
                <form className="" onSubmit={handleSubmit(sendEmail)}>
                    <Row className='p-2'>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input
                                className="contactInput form-control-lg px-1 pr-1 "
                                htmlFor="name"
                                aria-label="name"
                                id="name"
                                name="name"
                                type="text"
                                
                                placeholder="Name"
                                autoComplete="off"
                                {...register('name', {
                                    required: {
                                        value: true
                                        // message: 'Name is required'
                                    }
                                    // pattern: {
                                    //     value: /^[a-zA-Z ]*$/,
                                    //     message: 'Name must be letters only'
                                    // },
                                    // minLength: {
                                    //     value: 3,
                                    //     message: 'Name must be at least 3 characters long'
                                    // },
                                    // maxLength: {
                                    //     value: 30,
                                    //     message: 'Name must be less than 30 characters long'
                                    // }
                                })}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <FormFeedback>{errors.name?.message}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input
                                className="contactInput form-control-lg px-1 pr-1 shadow-none" 
                                htmlFor="email"
                                aria-label="email"
                                id="email"
                                name="email"
                                type="email"
                                
                                // onChange={(e) => setEmail(e.target.value)}              
                                placeholder="Email"
                                // minLength="5"
                                // maxLength="50"
                                autoComplete="off"

                                {...register('email', { required: { value: true } })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}    
                            />
                            <FormFeedback>{errors.email?.message}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input
                                className="contactInput form-control-lg px-1 pr-1 shadow-none" 
                                htmlFor='subject'
                                aria-label="subject"
                                name="subject"
                                id="subject"
                                type="text"
                                
                                // minLength="5"
                                // maxLength="50"
                                autoComplete="off"
                                placeholder="Subject"
                                {...register('subject', { required: { value: true } })}
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <FormFeedback>{errors.subject?.message}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="col-md-12 mb-3 py-1">
                            <textarea
                                className="form-control mb-1 px-1 pr-1 textBg shadow-none"
                                htmlFor="message"
                                aria-label="message"
                                type="textarea"  
                                id="message" 
                                name="message"
                                rows="5"
                                
                                placeholder="Message"
                                minLength="5"
                                maxLength="500"
                                // placeholder="Write your message here..."
                                autoComplete="off"
                                {...register('message', { required: { value: true } })}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <FormFeedback>{errors.message?.message}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-end py-1">
                            <button  
                                className="text-light sendBtn" 
                                type="submit"
                            >
                                Submit
                            </button>
                            <ToastContainer 
                                theme='dark' 
                                transition={Zoom} 
                                autoClose={5000} 
                                hideProgressBar={true}
                                toastClassName='quickToast'
                            />
                        </FormGroup>
                    </Row>
                </form>
                {/* </div> */}
            </Col>
        </div>
    )
}
export default ConForm;
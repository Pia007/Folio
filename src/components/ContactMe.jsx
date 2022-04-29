import React, { useState, useRef } from 'react';
// import 'dotenv/config';
import emailjs from 'emailjs-com';
import { validateEmail, validateName, validateSubject, validateMessage } from './Validate';
import { Row, Col, FormGroup, Input, FormFeedback, Button} from "reactstrap";
import { ToastContainer, toast, Zoom } from 'react-toastify';

const contactToastId = 'contact-toast-id';

const ContactMe = () => {
    const form = useRef();

    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState('');
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredSubjectIsValid, setEnteredSubjectIsValid] = useState('');
    const [enteredSubjectTouched, setEnteredSubjectTouched] = useState(false);

    const subjectInputIsValid = !enteredSubjectIsValid && enteredSubjectTouched;

    const [enteredMessage, setEnteredMessage] = useState('');
    const [enteredMessageIsValid, setEnteredMessageIsValid] = useState('');
    const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

    const messageInputIsValid = !enteredMessageIsValid && enteredMessageTouched;

    
    const changeNameHandler = e => {
        setEnteredName(e.target.value);

        if (validateName(e.target.value)) {
            setEnteredNameIsValid(true);
        } 
    };

    const changeEmailHandler = e => {
        setEnteredEmail(e.target.value);

        if (validateEmail(e.target.value)) {
            setEnteredEmailIsValid(true);
        }
    }
    const changeSubjectHandler = e => {
        setEnteredSubject(e.target.value);

        if (validateSubject(e.target.value)) {
            setEnteredSubjectIsValid(true);
        } 
    }

    const changeMessageHandler = e => {
        setEnteredMessage(e.target.value);

        if (validateMessage(e.target.value)) {
            setEnteredMessageIsValid(true);
        } 
    }
        
    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        } else {
            setEnteredNameIsValid(true);
        }
    };
    
    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true);

        if (enteredEmail.trim() === '') {
            setEnteredEmailIsValid(false);
            return;
        } else {
            setEnteredEmailIsValid(true);
        }
    };

    const subjectInputBlurHandler = () => {
        setEnteredSubjectTouched(true);

        if (enteredSubject.trim() === '') {
            setEnteredSubjectIsValid(false);
            return;
        } else {
            setEnteredSubjectIsValid(true);
        }
    };

    const messageInputBlurHandler = () => {
        setEnteredMessageTouched(true);

        if (enteredMessage.trim() === '') {
            setEnteredMessageIsValid(false);
            return;
        } else {
            setEnteredMessageIsValid(true);
        }
    };

    const showToast = () => {
        toast.success(`${enteredName}, your message has been sent! We will get back to you shortly.`, {
            position: toast.POSITION.BOTTOM_CENTER,
            toastId: contactToastId,
        });
        
    };

    const sendEmail = (e) => {
        e.preventDefault();

        setEnteredNameTouched(true);
        setEnteredEmailTouched(true);
        setEnteredSubjectTouched(true);
        setEnteredMessageTouched(true);

        if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
            return;
        }
        if (enteredEmail.trim() === '') {
            setEnteredEmailIsValid(false);
            return;
        }
        if (enteredSubject.trim() === '') {
            setEnteredSubjectIsValid(false);
            return;
        }
        if (enteredMessage.trim() === '') {
            setEnteredMessageIsValid(false);
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID || '', 
            process.env.REACT_APP_TEMPLATE_ID || '',
            form.current, 
            process.env.REACT_APP_USER_ID || ''
            )
        .then((result) => {
            console.log(result.text);
            showToast();
        }, (error) => {
            console.log(error.text);
        });
        
        setEnteredName('');
        setEnteredEmail('');
        setEnteredSubject('');
        setEnteredMessage('');
    };
    
    const nameError = enteredName.trim() === '' ? 'Please enter your name' : '';
    const emailError = enteredEmail.trim() === '' ? 'Please enter a valid email address' : '';
    const subjectError = enteredSubject.trim() === '' ? 'Please enter a subject' : '';
    const messageError = enteredMessage.trim() === '' ? 'Please enter a message' : '';

    return (
        <div className="container p-0 md-px-0">
            <Col className="">
                <form ref={form} onSubmit={sendEmail}>
                    <Row className="p-2">
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input 
                                className="contactInput form-control-lg px-1 pr-1  "
                                htmlFor="name"
                                aria-label="name" 
                                type="text"  
                                id="name" 
                                name="name" 
                                placeholder="Name"
                                value={enteredName}
                                invalid={nameInputIsValid}
                                onChange={changeNameHandler}
                                onBlur={nameInputBlurHandler}
                            />
                            <FormFeedback>{nameError}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input 
                                className="contactInput form-control-lg px-1 pr-1 shadow-none" 
                                htmlFor="email"
                                aria-label="email"
                                type="text"  
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                value={enteredEmail}
                                invalid={emailInputIsValid}
                                onChange={changeEmailHandler}
                                onBlur={emailInputBlurHandler}
                            />
                            <FormFeedback>{emailError}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input 
                                className="contactInput form-control-lg px-1 pr-1 border-left-0 shadow-none" 
                                htmlFor="subject"
                                aria-label="subject"
                                type="text"  
                                id="subject" 
                                name="subject" 
                                placeholder="Subject" 
                                value={enteredSubject}
                                invalid={subjectInputIsValid}
                                onChange={changeSubjectHandler}
                                onBlur={subjectInputBlurHandler}
                            />
                            <FormFeedback>{subjectError}</FormFeedback>
                        </FormGroup >
                        <FormGroup className="mb-2 mb-3 py-1">
                            <Input
                                className="form-control mb-1 px-1 pr-1 textBg shadow-none" 
                                htmlFor="message"
                                aria-label="message"
                                type="textarea"  
                                id="message" 
                                name="message" 
                                placeholder="Message..." 
                                rows="5" 
                                value={enteredMessage}
                                invalid={messageInputIsValid}
                                onChange={changeMessageHandler}
                                onBlur={messageInputBlurHandler}
                            /> 
                            <FormFeedback>{messageError}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-end py-1">
                            <Button
                                color=""
                                type="submit" 
                                className="btn btn-outline-secondary text-light sendBtn"
                            >
                                Send Email
                            </Button>
                            <ToastContainer 
                                theme='dark' 
                                transition={Zoom} 
                                autoClose={5000} 
                                //bodyClassName='quickToast'
                                toastClassName='quickToast' 
                                // className: applied to the container
                                // toastClassName: applied on the toast wrapper
                                // bodyClassName: applied on the toast body
                                // progressClassName: applied on the progress bar
                                // style: inline style applied to the container
                            />
                        </FormGroup>
                    </Row>
                </form>
            </Col>
        </div>
    );
};

export default ContactMe;
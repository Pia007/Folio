import {UseContact} from "./UseContact";
import ValidateInfo from "./ValidateInfo";
import { Row, Col, FormGroup, Input, FormFeedback, Button} from "reactstrap";
import { ToastContainer, toast, Zoom } from 'react-toastify';

export default function ContactInfo({ submitForm }) {
    const { handleChange, handleClick, values, handleSubmit, errors } = UseContact(
        submitForm,
        ValidateInfo
    );

    return (
        <div className="container p-0 md-px-0">
            <Col className="">
                {/* <div className="contactForm"> */}
                <form className="Contact" onSubmit={handleSubmit}>
                    <Row className='p-2'>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input
                                className="contactInput form-control-lg px-1 pr-1 "
                                htmlFor="name"
                                aria-label="name"
                                id="name"
                                name="name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                placeholder="Name"
                                //   minLength="5"
                                //   maxLength="50"
                                autoComplete="off"
                            />
                            <FormFeedback>{errors.name && <p> {errors.name} </p>}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input
                                className="contactInput form-control-lg px-1 pr-1 shadow-none" 
                                htmlFor="email"
                                aria-label="email"
                                id="email"
                                name="email"
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email"
                                // minLength="5"
                                // maxLength="50"
                                autoComplete="off"
                            />
                            <FormFeedback>{errors.email && <p> {errors.email} </p>}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="col-md-4 mb-3 py-1">
                            <Input
                                className="contactInput form-control-lg px-1 pr-1 shadow-none" 
                                htmlFor='subject'
                                aria-label="subject"
                                name="subject"
                                id="subject"
                                type="text"
                                value={values.subject}
                                onChange={handleChange}
                                // minLength="5"
                                // maxLength="50"
                                autoComplete="off"
                                placeholder="Subject"
                            />
                            {errors.subject && <p> {errors.subject} </p>}
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
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Message"
                                minLength="5"
                                maxLength="500"
                                // placeholder="Write your message here..."
                            />
                            <FormFeedback>{errors.message && <p> {errors.message} </p>}</FormFeedback>
                        </FormGroup>
                        <FormGroup className="d-flex justify-content-end py-1">
                            <button  
                                className="text-light sendBtn" 
                                type="submit"
                                onClick={handleClick}
                            >
                                Submit
                            </button>
                            <ToastContainer 
                                position="top-right"
                                theme='dark' 
                                transition={Zoom} 
                                autoClose={5000} 
                                hideProgressBar={true}
                                // bodyClassName='quickToast'
                                toastClassName='quickToast' 
                                // className='bg-none'
                                // style={{
                                //     backgroundColor: 'none'
                                // }}
                                // toastClassName: applied on the toast wrapper
                                // bodyClassName: applied on the toast body
                                // progressClassName: applied on the progress bar
                                // style: inline style applied to the container
                            />
                        </FormGroup>
                    </Row>
                </form>
                {/* </div> */}
            </Col>
        </div>
    );
}

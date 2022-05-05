import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast, Zoom } from 'react-toastify';

const contactToastId = 'contact-toast-id';

export default function ContactInfo({ submitForm }) {
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors } 
    } = useForm();

    const showToast = () => {
        toast.success(`Thanks for reaching out! I will get back to you shortly.`, {
            position: toast.POSITION.BOTTOM_CENTER,
            toastId: contactToastId,
        });
    };
    const resetForm = () => {
        reset();
    };
    

    const sendEmail = (formData) => {
        
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_USER_ID
        ).then(
            (result) => {
                console.log(result.text);
                resetForm();
                showToast();
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <div className="container p-0 md-px-0">
            <div className="">
                <form method='POST' className="Contact" onSubmit={handleSubmit(sendEmail)}>
                    <div className='row py-0 px-2'>
                        <div className="form-group col-md-4 mb-1 mb-md-3 py-1">
                            <input
                                className=" form-control contact-input px-1 pr-1 "
                                htmlFor="name"
                                aria-label="name"
                                id="name"
                                name="name"
                                type="text"
                                
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'Name is required.'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z ]*$/,
                                        message: 'Name must be letters only.'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Name must be at least 3 characters.'
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'Name must be less than 50 characters.'
                                    },
                                })}
                                placeholder="Name"
                                autoComplete="off"
                            />
                            {errors.name && <p className='mb-0 p-1 text-danger'>{errors.name.message}</p>}
                        </div>
                        <div className="form-group col-md-4 mb-1 mb-md-3 py-1">
                            <input
                                className=" form-control contact-input px-1 pr-1" 
                                htmlFor="email"
                                aria-label="email"
                                id="email"
                                name="email"
                                type="email"
                                
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                })}
                                placeholder="Email"
                                autoComplete="off"
                            />
                            {errors.email && <p className='mb-0 p-1 text-danger'>Enter a valid email address.</p>}
                        </div>
                        <div className="form-group col-md-4 mb-1 mb-md-3 py-1">
                            <input
                                className="form-control contact-input px-1 pr-1" 
                                htmlFor='subject'
                                aria-label="subject"
                                name="subject"
                                id="subject"
                                type="text"
                                {...register('subject', {
                                    required: {
                                        value: true,
                                        message: 'Subject is required.'
                                    },
                                    minLength: {
                                        value: 5,
                                        message: 'Subject must be at least 5 characters.'
                                    },
                                    maxLength: {
                                        value: 25,
                                        message: 'Subject must be less than 25 characters.'
                                    }
                                })}
                                autoComplete="off"
                                placeholder="Subject"
                            />
                            {errors.subject  && <p className='mb-0 p-1 text-danger'>{errors.subject.message}</p>}
                        </div>
                        <div className="form-group col-md-12 mb-1 mb-md-3 py-1">
                            <textarea
                                className="form-control contact-input mb-1 px-1 pr-1 textBg "
                                htmlFor="message"
                                aria-label="message"
                                type="textarea"  
                                id="message" 
                                name="message"
                                rows="5"
                                placeholder="Message"
                                {...register('message', {
                                    required: {
                                        value: true,
                                        message: 'Message is required.'
                                    },
                                    minLength: {
                                        value: 10,
                                        message: 'Message must be at least 5 characters.'
                                    },
                                    maxLength: {
                                        value: 250,
                                        message: 'Message must be less than 500 characters.'
                                    }

                                })}
                            />
                            {errors.message && <p className='mb-0 p-1 text-danger'>Please enter a message longer than 10 characters</p>}
                        </div>
                        <div className="form-group d-flex justify-content-end py-1">
                            <button  
                                className="text-light sendBtn" 
                                type="submit"
                            >
                                Submit
                            </button>
                            <ToastContainer 
                                position="top-right"
                                theme='dark' 
                                transition={Zoom} 
                                autoClose={5000} 
                                hideProgressBar={true}
                                toastClassName='quickToast'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
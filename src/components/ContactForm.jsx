import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import Fade from 'react-reveal/Fade';

const contactToastId = 'contact-toast-id';

export default function ContactInfo({ submitForm }) {
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors } 
    } = useForm();

    // TOAST NOTIFICATION
    const showToast = () => {
        toast.success(`Thanks for reaching out! I will get back to you shortly.`, {
            position: toast.POSITION.TOP_CENTER,
            toastId: contactToastId,
        });
    };
    const resetForm = () => {
        reset();
    };
    
    // EMAILJS
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
        <div className='container p-0 md-px-0'>
            <div>
                {/* FORM */}
                <form method='POST' className='Contact' onSubmit={handleSubmit(sendEmail)}>
                    <div className='row py-0 px-2'>
                        <div className='form-group col-md-4 mb-1 mb-md-3 px-0 px-md-1 py-1'>
                            <input
                                className=' form-control contact-input px-1 pr-1 '
                                htmlFor='name'
                                aria-label='name'
                                id='name'
                                name='name'
                                type='text'
                                
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
                                placeholder='Name'
                                autoComplete='off'
                            />
                            <Fade bottom>
                                {errors.name && <p className='mb-0 p-1 text-danger'>{errors.name.message}</p>}
                            </Fade>
                        </div>
                        <div className='form-group col-md-4 mb-1 mb-md-3 px-0 px-md-1 py-1'>
                            <input
                                className=' form-control contact-input px-1 pr-1' 
                                htmlFor='email'
                                aria-label='email'
                                id='email'
                                name='email'
                                type='email'
                                
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required.'
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Email must be valid.'
                                    },
                                })}
                                placeholder='Email'
                                autoComplete='off'
                            />
                            <Fade bottom>
                                {errors.email && <p className='mb-0 p-1 text-danger'>{errors.email.message}</p>}
                            </Fade>
                        </div>
                        <div className='form-group col-md-4 mb-1 mb-md-3 px-0 px-md-1 py-1'>
                            <input
                                className='form-control contact-input px-1 pr-1' 
                                htmlFor='subject'
                                aria-label='subject'
                                name='subject'
                                id='subject'
                                type='text'
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
                                autoComplete='off'
                                placeholder='Subject'
                            />
                            <Fade bottom>
                                {errors.subject  && <p className='mb-0 p-1 text-danger'>{errors.subject.message}</p>}
                            </Fade>
                        </div>
                        <div className='form-group col-md-12 mb-1 mb-md-3 px-0 px-md-1 py-1'>
                            <textarea
                                className='form-control contact-input mb-1 px-1 pr-1 textBg '
                                htmlFor='message'
                                aria-label='message'
                                type='textarea'  
                                id='message' 
                                name='message'
                                rows='5'
                                placeholder='Message'
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
                            <Fade bottom>
                                {errors.message && <p className='mb-0 p-1 text-danger'>{errors.message.message}</p>}
                            </Fade>
                        </div>
                        <div className='form-group d-flex justify-content-end px-0 px-md-1 py-1'>
                            <button  
                                className='sendBtn' 
                                type='submit'
                            >
                                Submit
                            </button>
                            {/* SUBMISSION RESPONSE */}
                            <ToastContainer 
                                position='top-right'
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
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Zoom } from 'react-toastify';


const contactToastId = 'contact-toast-id';

export const UseContact = (callback, validate) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value
        });

    };
    

    const showToast = () => {
        toast.success(`${values.name}, your message has been sent! We will get back to you shortly.`, {
            // position: toast.POSITION.BOTTOM_CENTER,
            toastId: contactToastId,
        });
        
    };

    const  handleSubmit = (e) => {
        e.preventDefault();
        
        if (Object.keys(validate(values)).length === 0) {
            emailjs
                .sendForm(
                    process.env.REACT_APP_SERVICE_ID, 
                    process.env.REACT_APP_TEMPLATE_ID, 
                    e.target, 
                    process.env.REACT_APP_USER_ID
                )
                .then(
                    (result) => {
                        console.log(result);
                        showToast();
                        
                    },
                    (errors) => {
                        console.log(errors);
                    }
                );
                setValues({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            
        }
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, isSubmitting, callback]);

    return { handleChange, handleSubmit, values, errors };
};

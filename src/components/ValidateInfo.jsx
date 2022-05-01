

export default function ValidateInfo(values) {
    let errors = {
        // isErrors: true
    };


    // name 
    if (!values.name) {
        errors.name = "Name is required";  
    } else if (values.name.length < 3) {
        errors.name = "Name must be at least 3 characters";
    }

    
    //email
    if (!values.email) {
        errors.email = "Enter an e-mail";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Enter a valid email";
    }

    //subject
    if (!values.subject) {
        errors.subject = "Subject is required";
    } else if (values.subject.length < 3) {
        errors.subject = "Subject must be at least 3 characters";
    }

    //message
    if (!values.message) {
        errors.message = "Message is required";
    } 

    return errors;
}
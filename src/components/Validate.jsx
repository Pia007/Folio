export const validateEmail = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

export const validateName = name => { 
    if(name.length < 3) {
        return false;
    }
}

export const validateSubject = subject => {
    if(subject.length < 3) {
        return false;
    }
}

export const validateMessage = message => {
    if(message.length < 3) {
        return false;
    }
}
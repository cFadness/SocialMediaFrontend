import { useState } from 'react';
import React from 'react';

const useForm = (callback) => {
    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        event.persist();
        setFormValues({...formValues, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    }

    return { formValues, handleChange, handleSubmit }
}

const Register = () => {
    //make axios Post request for registering new user
    return (
        <div>
            <RegisterForm/>
        </div>
    );
}
 

export default useForm
export default Register
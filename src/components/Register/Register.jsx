import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';

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
    useEffect(() => {
        registerUser()
    }, []);
        async function registerUser(formValues) {
    
            await axios.post('http://localhost:3000/api/users/register', formValues)
        
    
            return (
                <div>
                    <RegisterForm/>
                </div>
            );
    }
}
 

export default { useForm, Register};



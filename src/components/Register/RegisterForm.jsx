import React from 'react';
import useForm from './Register';

const RegisterForm = () => {
    const { formValues, handleChange, handleSubmit } = useForm(register);

    function register() {
        alert() //custom confirmation message upon registering
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                type='email'
                name='email'
                onChange={handleChange}
                value={formValues.email}
                required={true}/>

                <label>Password</label>
                <input
                type='password'
                name='password'
                onChange={handleChange}
                value={formValues.password}
                required={true}/>

                <label>First Name</label>
            </form>
        </div>
    )
}

export default RegisterForm;
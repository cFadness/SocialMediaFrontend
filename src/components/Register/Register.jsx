import React, {useState} from 'react';



export default function Register() {
    //State for registration
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //State for checking errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    //Handling first name change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };

    //Handling last name change
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };

    //Handling email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    //handling password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    //Handling the form subbmission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(true);
        }
    };

    //Success message
    const successMessage = () => {
        return(
            <div className="success" style={{display: submitted ? '' : 'none',}}>
                <h1>User {firstName, lastName} Successfully registered!</h1>
            </div>
        );
    };

    //Showing error message
    const errorMessage = () => {
        return(
            <div className="error" style={{display: error ? '' : 'none',}}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };


    return(
        <div className="form">
            <div>
                <h3>User Registration</h3>
            </div>

            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <form>
                <div>
                    <label>First Name:
                        <input onChange={handleFirstName} className="input" value={firstName} type="text" />
                    </label>
                </div>
                <div>
                    <label>Last Name:
                    <input onChange={handleLastName} className="input" value={lastName} type="text" />
                    </label>
                </div>
                <div>
                    <label>Email:
                    <input onChange={handleEmail} className="input" value={email} type="email" />
                    </label>
                </div>
                <div>
                    <label>Password:
                    <input onChange={handlePassword} className="input" value={password} type="password" />
                    </label>
                </div>
                <div>
                    <botton onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </botton>
                </div>
            </form>
        </div>    
    )
}


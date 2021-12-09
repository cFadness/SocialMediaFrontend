import React, {Component} from 'react';

class RegisterForm extends Component{

    constructor(props){
        super(props);
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            isAdmin: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.registerNewAccount(this.state);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" onChange={this.handleChange} value={this.state.email}/>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" onChange={this.handleChange} value={this.state.password}/>
                </div>
                <div>
                    <button type="submit" className="mt-3">Create Account</button>
                </div>
            </form>
        );
    }
}

export default RegisterForm;
import React, {Component} from 'react';
import axios from 'axios';
import RegisterForm from './RegisterForm';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    registerNewAccount = async (inputObject) => {
        try{
            let newAccount = await axios.post('http://localhost:3000/api/users/register', inputObject)
            console.log(newAccount)
        }
        catch(err){
            console.log("Error creating new account", err)
        }
    }


    render(){
        return(
           <div>
               <RegisterForm registerNewAccount={this.registerNewAccount}/>
               <Link to='/login'>
                   <button>Already a user? Login Here</button>
               </Link>
           </div>
        )
    }
}

export default Register;

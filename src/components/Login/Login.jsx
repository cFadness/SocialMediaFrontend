import React, {Component} from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';
import {Link} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    loginAccount = async (inputObject) => {
        try{
            const response = await axios.post('http://localhost:3000/api/users/login', inputObject);
            localStorage.setItem('token', response.data);
            console.log(response.data)
            window.location = '/'
        }
        catch(err){
            console.log("Error logging in", err)
        }
    }


    render(){
        return(
           <div>
               <LoginForm loginAccount={this.loginAccount}/>
               <Link to='/register'>
                   Not a user? Register Here
               </Link>
           </div>
        )
    }
}

export default Login;





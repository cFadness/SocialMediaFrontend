import React, {Component} from 'react';
import axios from 'axios';
import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }


    loginAccount = async (inputObject) => {
        try{
            const response = await axios.post('http://localhost:3000/api/users/login', inputObject);
            console.log(response.data)
            localStorage.setItem('token', response.data.token);
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
           </div>
        )
    }
}

export default Login;





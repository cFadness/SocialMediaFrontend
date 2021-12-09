
import React, {Component} from "react";
import { Routes, Route } from 'react-router-dom';
import DidNotFind from './DidNotFind/DidNotFind';
import Login from './Login/Login';
import Register from './Register/Register';
import { Redirect } from 'react';
import jwtDecode from 'jwt-decode';
// import jwtDecode and Redirect


class App extends Component {
    state = {
        currentUser: {}
    }

    userLogin = () => {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                currentUser: user
            });
        }
        catch(err){
            console.log("Error decoding token", err)
        }
    }

    render() {
        return(
            <div>

                <Routes>
                    {/* <Route path='/profile' render={props => {
                        if (!user){
                            return <Redirect to='/login' />;
                        } else {
                            return <Profile {...props} user={user} />
                            }
                        }}
                    /> */}

                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} userLogin={this.userLogin} />
                    <Route path='/' exact component={Login} />
                    {/* <Route path='/profile' component={Profile} />
                    <Route path='/friends' component={Friends} />
                    <Route path='/myPost' component={MyPost} /> */}
                    <Route path='/didNotFind' component={DidNotFind} />
                    <Redirect to='/didNotFind' />
                </Routes>
            </div>
        );
    }
}


export default App;

import React, {Component} from "react";
// import { Switch, Route } from 'react-router-dom';
import Register from "./Register/Register";
// import DidNotFind from './DidNotFind/DidNotFind';


class App extends Component {
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <Register />
            </div>    
        )
    }
    // state = {}


    // componentDidMount() {
    //     const jwt = localStorage.getItem('token');
    //     try{
    //         const user = jwtDecode(jwt);
    //         this.setState({
    //             user
    //         });
    //     } catch {

    //     }
    // }


    // render() {
    //     return(
    //     <div><h1>Hello</h1></div>)
    //     const user = this.state.user;
    //     return(
    //         <div>
    //             <Switch>
    //                 <Route path='/profile' render={props => {
    //                     if (!user){
    //                         return <Redirect to='/login' />;
    //                     } else {
    //                         return <ProfileScreen {...props} user={user} />
    //                         }
    //                     }}
    //                 />

    //                 <Route path='/register' component={RegisterScreen} />
    //                 <Route path='/login' component={LoginScreen} />
    //                 <Route path='/' exact component={LandingScreen} />
    //                 <Route path='/profile' component={ProfileScreen} />
    //                 <Route path='/friends' component={FriendsScreen} />
    //                 <Route path='/myPost' component={MyPostScreen} />
    //                 <Route path='/didNotFind' component={DidNotFind} />
    //                 <Redirect to='/didNotFind' />
    //             </Switch>
    //         </div>
    //     );
    // }
}


export default App;
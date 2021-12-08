import { Switch, Route } from 'react-route-dom';
import React from 'react';




class App extends Component {
    state = {}


    componentDidMount() {
        const jwt = localStorage.getItem('token');
        try{
            const user = jwtDecode(jwt);
            this.setState({
                user
            });
        } catch {

        }
    }


    render() {
        const user = this.state.user;
        return(
            <div>
                <Switch>
                    <Route path='/profile' render={props => {
                        if (!user){
                            return <Redirect to='/login' />;
                        } else {
                            return <ProfileScreen {...props} user={user} />
                            }
                        }}
                    />

                    <Route path='/register' component={RegisterScreen} />
                    <Route path='/login' component={LoginScreen} />
                    <Route path='/' exact component={LandingScreen} />
                    <Route path='/profile' component={ProfileScreen} />
                    <Route path='/friends' component={FriendsScreen} />
                    <Route path='/myPost' component={MyPostScreen} />
                    <Route path='/not-found' component={NotFound} />
                    <Redirect to='/not-found' />
                </Switch>
            </div>
        );
    }
}


export default App;
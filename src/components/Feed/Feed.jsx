import React, { Component }  from 'react';
import axios from 'axios';

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            friendsList: [],
            feed: []
        };
    }

    getFriendsList = async () => {
        try{
            const jwt = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:3000/api/users/friends`, {headers: {'x-auth-token': jwt}})
            console.log(response.data)
            this.setState({
                friendsList: response.data
            })
        }
        catch(err){
            console.log("Error getting friends list", err)
        }
    }

    getFeed  = () => {
        return (
            
        )
    }
     
     

    render(){
        <div>

        </div>
    }
}

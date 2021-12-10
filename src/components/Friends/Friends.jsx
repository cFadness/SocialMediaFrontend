import React, {Component} from 'react';
import axios from 'axios';

class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: null
        };
    }

    componentDidMount(){
        this.getFriendsList();
    }

    getFriendsList = async () => {
        try{
            const jwt = localStorage.getItem('token');
            const response = await axios.get('http://localhost:3000/api/users/friends', {headers: {'x-auth-token': jwt}});
            console.log(response.data)
            this.displayFriendsList(response.data)
        }
        catch(err){
            console.log("Error getting friends list", err)
        }
    }

   displayFriendsList = (responseData) => {
        let mappedFriends = responseData.map((friend) => {
            return(
                <li>
                    {friend.photos[0]}
                    {friend.firstName}
                    {friend.lastName}
                </li>
            )
        });
        this.setState({
            friends: mappedFriends
        })
   }    


    render(){
        return(
           <div>
               {this.state.friends}
           </div>
        )
    }
}

export default Friends;
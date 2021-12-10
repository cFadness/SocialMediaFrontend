import React, { Component }  from 'react';
import MyPosts from './MyPosts';
import axios from 'axios';
import AddFriendForm from './AddFriendForm';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            photo: [],
            about: "",
            inbox: [],
            possibleFriends: []
        };
    }

    componentDidMount(){
        this.getUserInfo();
    }

    getUserInfo = async () => {
        try{
            const jwt = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:3000/api/users/${this.props.user._id}`, {headers: {'x-auth-token': jwt}});
            console.log(response.data)
            this.stateUserInfo(response.data)
        }
        catch(err){
            console.log("Error getting info", err)
        }
    }

    stateUserInfo = (responseData) => {
        this.setState({
            photo: responseData.photos[0],
            about: responseData.about,
            inbox: responseData.inbox
        })
   }   

   displayInbox = () => {
    this.state.inbox.map((friend) => {
        return(
            <li>
                <h5>{friend.firstName} would like to be your friend</h5>
                {friend.photos}
                {friend.firstName}
                {friend.lastName}
                <button onClick={this.acceptFriendRequest(friend)}>Accept</button>
                <button onClick={this.denyFriendRequest(friend)}>Deny</button>
            </li>
        )
    })
    }

    findFriends = async (input) => {
        try{
            const response = await axios.get(`http://localhost:3000/api/users`);
            console.log(response.data)
            let foundUsers = response.data.filter((user) => {
                if(user.firstName === input.firstName && user.lastName === input.lastName){
                    return true
                }
                else{
                    return false
                }
            })
            let mappedUsers = foundUsers.map((user) => {
                return(
                    <div>
                        <li>
                            {user.photos}
                            {user.firstName}
                            {user.lastName}
                            <button onClick={() => this.sendFriendRequest(user._id)}>Add Friend</button>
                        </li>
                    </div>
                )
            })
            this.setState({
                possibleFriends: mappedUsers
            })
        }
        catch(err){
            console.log("Error getting list of users", err)
        }
    }

    sendFriendRequest = async (theUserId) => {
        try{
            const jwt = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:3000/api/users/${theUserId}`, {headers: {'x-auth-token': jwt}});
            console.log(response.data)
            this.setState({
                inbox: response.data.inbox
            })
        }
        catch(err){
            console.log("Error making PUT request", err)
        }
    }

    acceptFriendRequest = async (friend) => {
            try{
                const jwt = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/api/users/friends', {headers: {'x-auth-token': jwt}});
                response.data.push(friend)
            }
            catch(err){
                console.log("Error getting friends list", err)
            }
            this.denyFriendRequest()
    }


    denyFriendRequest = (friend) => {
       let newInbox = this.state.inbox.filter((friendRequest) => {
            if(friendRequest._id !== friend._id){
                return true
            }
            else{
                return false
            }
        })
        this.setState({
            inbox: newInbox
        })
        this.setInbox()
        
    }

    setInbox = async () => {
        try{
            const jwt = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:3000/api/users`, {headers: {'x-auth-token': jwt}},
            {
                inbox: this.state.inbox
            });
            console.log(response.data)
        }
        catch(err){
            console.log("Error making PUT request", err)
        }
    }


   


    render(){
        console.log(this.state.photo)
        console.log(this.state.about)
        return(
           <div>
               <div>
                    <button onClick={this.displayInbox}>Show pending friend requests</button>
                    <button onClick={""}>Close</button>
               </div>
               <div>
                    {this.state.photo}
                    {this.state.about}
                    <MyPosts user={this.props.user}/>
              </div>
              <div>
                  <AddFriendForm findFriends={this.findFriends} />
                  {this.state.possibleFriends}
              </div>
           </div>
        )
    }
}


export default Profile;

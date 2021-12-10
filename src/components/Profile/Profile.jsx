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
    this.state.inbox.map((element) => {
        return(
            <li>
                <h5>{element.firstName} would like to be your friend</h5>
                {element.photos}
                {element.firstName}
                {element.lastName}
                <button onClick={}>Accept</button>
                <button onClick={}>Deny</button>
            </li>
        )
    })
    }

    findFriends = (input) => {
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
                            <button onClick={this.xyz(user._id)}>Add Friend</button>
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

    xyz = async (theUserId) => {
        try{
            const response = await axios.put(`http://localhost:3000/api/users/${theUserId}`);
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

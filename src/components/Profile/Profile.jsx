import React, { Component }  from 'react';
import MyPosts from './MyPosts';
import axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            photo: [],
            about: ""
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
            this.displayUserInfo(response.data)
        }
        catch(err){
            console.log("Error getting info", err)
        }
    }

    displayUserInfo = (responseData) => {
        this.setState({
            photo: responseData.photos[0],
            about: responseData.about
        })
   }    


    render(){
        console.log(this.state.photo)
        console.log(this.state.about)
        return(
           <div>
               {this.state.photo}
               {this.state.about}
              <MyPosts user={this.props.user}/>
           </div>
        )
    }
}

export default Profile;

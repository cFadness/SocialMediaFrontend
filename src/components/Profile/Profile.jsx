import React, { Component }  from 'react';
import MyPosts from './MyPosts';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            photos: this.props.user.photos[0],
            about: this.props.user.about,
        };
    }
    render(){
        return(
           <div>
               {this.state.photos}
               {this.state.about}
              <MyPosts user={this.props.user}/>
           </div>
        )
    }
}

export default Profile;

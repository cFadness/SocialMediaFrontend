import React, {Component} from 'react';
import axios from 'axios';

class MyPosts extends Component {
    constructor(props){
        super(props);
        this.state = {
            myPosts: null
        };
    }

    componentDidMount(){
        this.getMyPosts();
    }

    getMyPosts = async () => {
        try{
            const jwt = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:3000/api/posts/${this.props.user._id}`, {headers: {'x-auth-token': jwt}});
            console.log(response.data)
            this.displayMyPosts(response.data)
        }
        catch(err){
            console.log("Error getting posts", err)
        }
    }

   displayMyPosts = (responseData) => {
        let mappedPosts = responseData.map((post) => {
            return(
                <li>
                    {post.text}
                    {post.likes}
                    {post.dislikes}
                    {post.dateCreated}
                </li>
            )
        });
        this.setState({
            myPosts: mappedPosts
        })
   }    


    render(){
        return(
           <div>
               {this.state.myPosts}
           </div>
        )
    }
}

export default MyPosts;
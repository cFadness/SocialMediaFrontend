import React, { Component }  from 'react';
import axios from 'axios';

class AddFriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.findFriends(this.state)
    }

   
    render(){
        return(
           <div>
               <h5>Search for friend</h5>
               <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
                    </div>
                    <div>
                        <button type="submit" className="mt-3">Find Friend</button>
                    </div>
                </form>
           </div>
        )
    }
}


export default AddFriendForm;
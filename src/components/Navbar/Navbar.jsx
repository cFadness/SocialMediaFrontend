// import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import React, { useEffect } from "react";
import {Link} from 'react-router-dom';

// import "./Navbar.css";

const Navbar = (props) => {


    const logout =()=>{
        localStorage.removeItem('token')
        props.forceRerender()
    }
    return(
        <div>
            <ul>
                {!props.user &&
                    <React.Fragment>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </React.Fragment>
                }
                {props.user &&
                    <React.Fragment>
                        <h4>Welcome {props.user.firstName}</h4>
                        <li>
                            <Link onClick={() =>logout()} to='/login'>Logout</Link>
                            <Link to='/profile'>Profile</Link>
                            <Link to='/friends'>Friends</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
    )
}

export default Navbar;
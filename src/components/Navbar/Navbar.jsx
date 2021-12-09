// import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import React from "react";
import {Link} from 'react-router-dom';

// import "./Navbar.css";

const Navbar = (props) => {
    return(
        <div>
            {props.user && <h4>Welcome {props.user.firstName}</h4>}
            <ul>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
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
                        <li>
                            <Link to='/login'>Logout</Link>
                        </li>
                    </React.Fragment>
                }
            </ul>
        </div>
    )
}

export default Navbar;
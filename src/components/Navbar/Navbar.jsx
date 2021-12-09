import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import "./Navbar.css";



function Navbar() {
    return(
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">Rally Point</span>
            </div>
            <div className="navbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friends or posts" className="searchInput"></input>
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Home</span>
                    <span className="navbarLink">Friends</span>
                    <span className="navbarLink">Posts</span>
                    <span className="navbarLink">Logout</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications />
                        <span className="navbarIconBadge">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
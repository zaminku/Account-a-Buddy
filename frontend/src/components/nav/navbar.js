import React from 'react';
import { Link } from 'react-router-dom'
import "./navbar.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/");
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="navbar-right">
                    <Link to={'/chat'}>Chat</Link>
                    <Link to={'/goals'}>Goals</Link>
                    <button className="logout-btn" onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="navbar-right">
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">

                <Link to={'/'} id="logo"> 
                    <img className="navbar-logo" src="../handshake.png" alt="Github-logo" /> Account-A-Buddy 
                </Link>
                
                <div className="f-dec">
                    <Link to={'/about'}>Features</Link>
                </div>

                <div className="c-dec">
                    <Link to={'/contact'}>Contact Us</Link>
                </div>

                <div className="nav-right-margin">
                    {this.getLinks()}
                </div>
            </div>
        );
    }
}

export default NavBar;
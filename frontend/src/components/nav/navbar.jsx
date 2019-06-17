import React from 'react';
import { Link } from 'react-router-dom'
import Modal from '../modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className = "navbar">
          <div className = "navbar-links">
            <Link to={'/profile'} className="navbar-link"><h1>Hello {this.props.currentUser.handle}</h1></Link>
            <Link to={'/questions'} className="navbar-link">All Questions</Link>
            <Link to={'/profile'} className="navbar-link">Profile</Link>
            <Link to={'/new_question'} className="navbar-link">Write a Question</Link>
            <button onClick={this.logoutUser} className = "logout-link">Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <Modal />
          <div className="navbar-links">
            <Link 
              onClick={() => this.props.openModal('signup')}
              className="navbar-link"
            >Signup</Link>
            <Link
              onClick = {() => this.props.openModal('login')}
              className="navbar-link"
            >Login</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className = "logo-container">
          <Link to={'/'}><h2 className="logo">RFDB</h2></Link>
          <p className="sub-logo">A Red Flag Deal Breaker Database!</p>
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
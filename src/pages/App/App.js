import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { HomeRoutes } from '../routes';
import '../../assets/fonts';
import './App.css';

export default class App extends Component {
  // I am making this my global state just because redux is to
  // much bolierplate to implemnet in such a small app
  state = {
    // I save the session in cookies and in redux to keep track
    userLoggedIn: false,
  };

  //  this mehtod i always put them as action and form there update my store
  setUserLoggedIn = () => {
    this.setState({ userLoggedIn: true });
  }

  setUserLoggedOut = () => {
    this.setState({ userLoggedIn: false });
  }

  render() {
    const session = {
      setUserLoggedIn: this.setUserLoggedIn,
      setUserLoggedOut: this.setUserLoggedOut,
      userLoggedIn: this.state.userLoggedIn,
    };

    return (
      <Router>
        <div className='app_container'>
          <HomeRoutes session={session} />
        </div>
      </Router>
    )
  }
}

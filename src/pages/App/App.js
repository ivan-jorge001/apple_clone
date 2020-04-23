import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { HomeRoutes } from '../routes';
import logo from '../../assets/images/logo.svg';
import '../../assets/fonts';
import './App.css';

export default class App extends Component {
  state = {
    // user
  };

  render() {
    return (
      <Router>
        <HomeRoutes/>
      </Router>
    )
  }
}

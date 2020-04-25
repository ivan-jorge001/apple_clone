import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ROUTES } from '../routes';
import AuthService from '../../services/AuthService';
import NavHeader from '../../components/NavHeader';
import NewProducts from '../NewProducts';
import logoBlack from '../../assets/images/apple_black.svg';
import './AuthPage.css';

class AuthPage extends Component {
  state = {
    loginForm: true,
    fields: {
      username: '',
      password: '',
      reenterPassword: '',
    } 
  };

  onLogin = () => {
    if (!this.state.loginForm) {
      this.setState({ loginForm: !this.state.loginForm });
      return;
    }

    if (!this.isPasswordValid()) {
      return;
    }

    // Normally here is where i would call my action
    // and my action would have the call to my service
    const { username, password } = this.state.fields;

    AuthService.login(username, password)
    .then(() => {
      // usually all this is done in the action so the
      // react component are clean from any logic
      this.props.session.setUserLoggedIn();
      console.log(this.props);
      localStorage.setItem('userLoggedIn', true);
    }).catch((err) => {
      // I hate using conosle logs in production apps
      // i like more using custom loggers to be able to track errors
      // and see analitical data
      console.log(err)
    })

  }

  onSignUp = () => {
    if (this.state.loginForm) {
      this.setState({ loginForm: !this.state.loginForm });
      return;
    }


    if (!this.isPasswordValid() || !this.arePasswordEqual()) {
      return;
    }

    // Normally here is where i would call my action
    //  and my action would have the call to my service
    AuthService.signup(this.state.fields)
    .then(() => {
      this.props.session.setUserLoggedIn();
      console.log(this.props);
    }).catch((err) => {
      // I hate using conosle logs in production apps
      // i like more using custom loggers to be able to track errors
      // and see analitical data
      console.log(err)
    })
  }

  arePasswordEqual = () => {
    return this.state.fields.password && this.state.fields.password === this.state.fields.reenterPassword;
  }

  onInputChange(e, field) {
    this.setState({
      fields: {
        ...this.state.fields,
        [field]: e.currentTarget.value
      }
    });
  }

  isPasswordValid() {
    return this.state.fields.password !== '' && this.state.fields.password.length > 8;
  }

  renderLogInForm() {
    const formError = this.state.fields.password ? !this.isPasswordValid() : false;
    const mismatchPassword = !this.arePasswordEqual();

    return (
      <div
        className="authpage_loginform"
      >
        <img
          className="authpage_loginform_logo"
          src={logoBlack}
          alt="apple logo"
        />
        <div className="authpage_loginform_textfield">
          <TextField
            id="filled-basic"
            label="Username"
            variant="outlined"
            style={{ marginTop: 8 }}
            onChange={(e) => this.onInputChange(e, 'username')}
          />
          <TextField
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"
            style={{ marginTop: 8 }}
            onChange={(e) => this.onInputChange(e, 'password')}
            helperText={formError ? "Password not valid" : ""}
            error={formError}
          />
          {!this.state.loginForm
            ? <TextField
              id="filled-basic"
              label="Re enter Password"
              variant="outlined"
              type="password"
              style={{ marginTop: 8 }}
              onChange={(e) => this.onInputChange(e, 'reenterPassword')}
              helperText={mismatchPassword ? "Passwords dont match" : ""}
              error={mismatchPassword}
            />
          : <div/>}
        </div>
        <div className="authpage_loginform_button">
          <Button
            variant={this.state.loginForm ? "outlined" : ""}
            color="primary"
            style={{ margin: 15 }}
            onClick={this.onLogin}
          >
            Login
          </Button>
          <Button
            variant={!this.state.loginForm ? "outlined" : ""}
            color="primary"
            onClick={this.onSignUp}
          >
            Signup
          </Button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <NavHeader animate={this.props.session.userLoggedIn}/>
        {this.props.session.userLoggedIn
          ? <NewProducts onClick={() => this.props.history.push(ROUTES.WELCOME)}/>
          : (
              <div className="authpage_background">
                {this.renderLogInForm()}
              </div>
            )
        }
      </div>
    );
  }
}

AuthPage.propTypes = {
  session: PropTypes.shape({
    setUserLoggedIn: PropTypes.func,
    setUserLoggedOut: PropTypes.func,
    userLoggedIn: PropTypes.bool,
  }),
}

export default AuthPage;

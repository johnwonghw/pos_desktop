import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterForm from './register-form';

import './_register-page.scss'

class RegisterPage extends Component {
  render() {
    let {
      registerUser
    } = this.props;
    return (
      <div className="register-page-container">
        <RegisterForm 
          registerUser={registerUser}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let signInState = state
  
  return {
    actionLoading: signInState.actionLoading,
    username: signInState.username,
    password: signInState.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: bindActionCreators((userInfo) => {
      let { email, password } = userInfo;
      return {
        type: "REGISTER_PAGE__REGISTER_USER",
        payload: {
          email,
          password
        }
      }
    }, dispatch)
  }
}


RegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
export default RegisterPage;

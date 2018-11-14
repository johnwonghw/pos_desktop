import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import LoginForm from './login-form';
import _config from 'config';
import './_login-page.scss'

class LoginPage extends Component {
  render() {
    let {
      actionLoading,
      login
    } = this.props;

    return (
      <div className="login-page-container">

        <LoginForm 
          login={login}
        />
        
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  let loginState = state['login-page'];

  return {
    actionLoading: loginState.actionLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: bindActionCreators((params) => {
      return {
        type: "LOGIN_PAGE__LOGIN",
        payload: params
      }
    }, dispatch)
  }
}

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)
export default LoginPage;

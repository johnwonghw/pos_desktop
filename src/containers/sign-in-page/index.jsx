import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import SignInForm from './sign-in-form';
import _config from 'config';
import './_sign-in-page.scss'

const FormItem = Form.Item;
class SignInPage extends Component {
  handleInputChange = (name, value) => {
    let { inputChange } = this.props;

    inputChange(name, value)
  }
  render() {
    let {
      actionLoading,
      username,
      password,
      inputChange
    } = this.props;

    return (
      <div className="sign-in-page-container">

        <SignInForm />
        
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  let signInState = state['sign-in-page'];

  return {
    actionLoading: signInState.actionLoading,
    username: signInState.username,
    password: signInState.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChange: bindActionCreators((name, value) => {
      return {
        type: "SIGN_IN_PAGE__SET_STATE",
        state: {
          [name]: value
        }
      }
    }, dispatch)
  }
}

// SignInPage = Form.create()(SignInPage)
SignInPage = connect(mapStateToProps, mapDispatchToProps)(SignInPage)
export default SignInPage;

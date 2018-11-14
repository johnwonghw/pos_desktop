import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegisterForm from './register-form';

import './_register-page.scss'

class RegisterPage extends Component {
  render() {
    let {
      register
    } = this.props;
    return (
      <div className="register-page-container">
        <RegisterForm 
          register={register}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let signInState = state
  
  return {
    actionLoading: signInState.actionLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: bindActionCreators((userInfo) => {
      let { email, password } = userInfo;
      return {
        type: "REGISTER_PAGE__REGISTER",
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

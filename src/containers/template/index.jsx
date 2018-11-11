import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SignInPage extends Component {
  render() {
    return (
      <div>
        <input />
        <input />
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

  }
}


SignInPage = connect(mapStateToProps, mapDispatchToProps)(SignInPage)
export default SignInPage;

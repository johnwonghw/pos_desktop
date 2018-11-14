import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        Welcome, please <span onClick={()=>{this.props.history.push('/sign-in')}} style={{ cursor: "pointer" }}>sign in</span> to continue
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


DashboardPage = connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
export default DashboardPage;

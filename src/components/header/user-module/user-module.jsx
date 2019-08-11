import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./log-in/log-in";
import SignUp from "./sign-up/sign-up";

class UserModule extends Component {
  render() {
    let userStatus;
    if (this.props.user === null) {
      userStatus = (
        <span class="buttons">
          <Login />
          <SignUp />
        </span>
      );
    } else {
      userStatus = <p className="subtitle">{this.props.user.username}</p>;
    }
    return <div>{userStatus}</div>;
  }
}

const mapStateToProps = state => ({
  user: state.user.userData
});

export default connect(mapStateToProps)(UserModule);

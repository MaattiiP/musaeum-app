import React, { Component } from "react";
import { connect } from "react-redux";
import {
  switchToArtifactView,
  switchToMuseumView,
  switchToSignUpView
} from "./actions";
import Login from "../user/Login";

import logo from "./musaeum-logo.svg";
import "./Header.scss";

class Header extends Component {
  render() {
    let userStatus;
    if (this.props.user === null) {
      userStatus = <span> <Login /> <button className="button is-primary" onClick={this.props.signUpView}>Sign Up</button> </span>
    } else {
      userStatus = <p className="subtitle">{this.props.user.username}</p>
    }
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            className="navbar-item image is-rounded is-64x64"
          />
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={this.props.museumView}>
              Museos
            </a>
            <a className="navbar-item" onClick={this.props.artifactView}>
              Artefacto
            </a>
            <p className="navbar-item">Monumentos</p>
          </div>
          <div className="navbar-end" id="navbarEndLogIn">
            <div className="navbar-item" id="navbarEndSearchBox">
              <input
                type="text"
                placeholder="Buscador"
                className="button is-light"
              />
            </div>
            <div className="navbar-item">
              {userStatus}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  header: state.header,
  user: state.user.userData
});
const mapDispatchToProps = dispatch => ({
  artifactView: () => dispatch(switchToArtifactView()),
  museumView: () => dispatch(switchToMuseumView()),
  signUpView: () => dispatch(switchToSignUpView())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

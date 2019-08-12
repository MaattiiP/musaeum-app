import React, { Component } from "react";
import { connect } from "react-redux";
import {
  switchToArtifactView,
  switchToMuseumView,
  switchToMonumentView
} from "./actions";
import UserModule from "./user-module/user-module";

import logo from "./musaeum-logo.svg";

class Header extends Component {
  render() {
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
            <a className="navbar-item" onClick={this.props.monumentView}>
              Monumentos
            </a>
          </div>
          <div className="navbar-end" id="navbarEndLogIn">
            <div className="navbar-item">
              <input
                type="text"
                className="input is-medium is-rounded"
                placeholder="Buscar"
              />
            </div>
            <div className="navbar-item">
              <UserModule />
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
  monumentView: () => dispatch(switchToMonumentView())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

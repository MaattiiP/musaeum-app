import React, { Component } from "react";
import { connect } from "react-redux";
import {
  switchToArtifactView,
  switchToMuseumView,
  switchToMonumentView
} from "./actions";
import UserModule from "./user-module/user-module";
import Search from "./search/search";

import logo from "./musaeum-logo.svg";

const INACTIVE_MOBILE_MENU = "navbar-menu";
const ACTIVE_MOBILE_MENU = "navbar-menu is-active";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }
  toggleMobileMenu() {
    this.setState({
      mobileMenu: !this.state.mobileMenu
    });
  }
  render() {
    let mobileMenuStatus;
    this.state.mobileMenu
      ? (mobileMenuStatus = ACTIVE_MOBILE_MENU)
      : (mobileMenuStatus = INACTIVE_MOBILE_MENU);
    return (
      <div className="navbar is-transparent">
        <div className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            className="navbar-item image is-rounded is-64x64"
          />
          <a className="navbar-burger burger" onClick={this.toggleMobileMenu}>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div className={mobileMenuStatus}>
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
              <Search />
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

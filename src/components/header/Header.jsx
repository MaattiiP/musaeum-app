import React, { Component } from 'react'

import { connect } from 'react-redux';

import {switchToArtifactView, switchToMuseumView} from './actions'

import logo from './musaeum-logo.svg';
import './Header.scss';


class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-item image is-rounded is-64x64" />
          <h1 className="navbar-item">Musaeum</h1>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" onClick={this.props.museumView}>Museos</a>
              <a className="navbar-item" onClick={this.props.artifactView}>Artefacto</a>
              <p className="navbar-item">Monumentos</p>
            </div>
            <div className="navbar-end" id="navbarEndLogIn">
            <div className="navbar-item" id="navbarEndSearchBox">
                <input type="text" placeholder="Buscador" className="button is-light"/>  
              </div>
              <div className="navbar-item">
                <p className="button is-primary" >
                  <strong>Log in</strong>
                </p>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  header: state.header
});
const mapDispatchToProps = dispatch => ({
  artifactView: () => dispatch(switchToArtifactView()),
  museumView: () => dispatch(switchToMuseumView())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);

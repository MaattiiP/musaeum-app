import React, { Component } from 'react'
import logo from './musaeum-logo.svg';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-item image is-rounded is-64x64" />
          <h1 className="navbar-item">Musaeum</h1>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Museos</a>
              <a className="navbar-item">Artefacto</a>
              <a className="navbar-item">Monumentos</a>
            </div>
            <div className="navbar-end" id="navbarEndLogIn">
            <div className="navbar-item" id="navbarEndSearchBox">
                <input type="text" placeholder="Buscador" className="button is-light"/>  
              </div>
              <div className="navbar-item">
                <a className="button is-primary">
                  <strong>Log in</strong>
                </a>
              </div>
              
            </div>
          </div>
      </div>
    )
  }
}
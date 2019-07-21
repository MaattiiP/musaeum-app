import React, { Component } from 'react'
import logo from './musaeum-logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-item image is-rounded is-64x64" />
          <h1 className="navbar-item">Musaeum</h1>
        </div>
      </div>
    )
  }
}

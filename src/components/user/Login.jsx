import React, { Component } from 'react';
import { connect } from 'react-redux';
import {switchToMuseumView} from '../header/actions';
import api from '../../api/api';

const ACTIVE_MODAL = "modal is-active";
const INACTIVE_MODAL = "modal";

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: ""
    }
    this.usernameInput = this.usernameInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernameInput(event) {
    this.setState({username: event.target.value})
  }
  passwordInput(event) {
    this.setState({password: event.target.value})
  }
  handleSubmit() {
    api.postLoginCredentials(this.state.username, this.state.password).then(
      response => console.log(response)
    )

  }

  render() {
    let status
    if (this.props.header.activeView === 'login'){
      status = ACTIVE_MODAL
    } else {
      status =  INACTIVE_MODAL
    }
    return(
      <div className={status}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" placeholder="You" value={this.state.username} onChange={this.usernameInput}/>
              </div>
              <label className="label">Password</label>
              <div className="control">
                <input className="input is-success" type="text" placeholder="****" value={this.state.password} onChange={this.passwordInput}/>
              </div>
          </div>
          <button className="button is-primary" onClick={this.handleSubmit}>Log in</button>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={this.props.museumView}></button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  header: state.header
});
const mapDispatchToProps = dispatch => ({
  museumView: () => dispatch(switchToMuseumView()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

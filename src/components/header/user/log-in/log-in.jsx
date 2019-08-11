import React, { Component } from "react";
import { connect } from "react-redux";
import { saveUser } from "../actions";
import api from "../../../../api/api";

const ACTIVE_DROPDOWN = "dropdown is-right is-active";
const INACTIVE_DROPDOWN = "dropdown";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      username: "",
      password: ""
    };
    this.usernameInput = this.usernameInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.setState({
      active: !this.state.active
    })
  }
  usernameInput(event) {
    this.setState({ username: event.target.value });
  }
  passwordInput(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit() {
    api
      .postLoginCredentials(this.state.username, this.state.password)
      .then(response => this.props.saveUser(response.data));
  }

  render() {
    let status;
    if (this.state.active === true) {
      status = ACTIVE_DROPDOWN;
    } else {
      status = INACTIVE_DROPDOWN;
    }

    return (
      <div className={status}>
        <div className="dropdown-trigger">
          <button className="button is-dark" onClick={this.openMenu}>
            Log In
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
          <div className="dropdown-content is-centered">
            <div className="field">
              <label className="label"> > Username</label>
              <div className="control">
                <input
                  className="input is-small is-rounded"
                  type="email"
                  placeholder="You"
                  value={this.state.username}
                  onChange={this.usernameInput}
                />
              </div>
              <label className="label"> > Password</label>
              <div className="control">
                <input
                  className="input is-small is-rounded"
                  type="password"
                  placeholder="****"
                  value={this.state.password}
                  onChange={this.passwordInput}
                />
              </div>
            </div>
            <hr className="dropdown-divider" />
            <div className="buttons has-addons is-centered">
              <button className="button is-primary" onClick={this.handleSubmit}>
                Log in
              </button>
              <button className="button is-danger" onClick={this.openMenu}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  saveUser: (payload) => dispatch(saveUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

import React, { Component } from "react";
import api from "../../../../api/api";
import { connect } from "react-redux";
import { switchToMuseumView } from "../../../header/actions";
import { saveUser } from "../actions";

const ACTIVE_MODAL = "modal is-active";
const INACTIVE_MODAL = "modal";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      username: "",
      email: "",
      password1: "",
      password2: "",
      errorMensage: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassword1Change = this.handlePassword1Change.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
    this.submitNewUser = this.submitNewUser.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      status: !this.state.status
    });
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePassword1Change(e) {
    this.setState({
      password1: e.target.value
    });
  }
  handlePassword2Change(e) {
    this.setState({
      password2: e.target.value
    });
  }
  handleError(error) {
    this.setState({
      username: "",
      email: "",
      password1: "",
      password2: "",
      errorMensage: "Nombre de usuario o contraseña equivocados"
    });
  }
  submitNewUser() {
    api
      .postUserRegistration(
        this.state.username,
        this.state.email,
        this.state.password1,
        this.state.password2
      )
      .then(response => {
        this.props.saveUser(response.data);
        this.toggleModal();
      })
      .catch(error => this.handleError(error.response.data));
  }

  render() {
    let modalStatus;
    this.state.status
      ? (modalStatus = ACTIVE_MODAL)
      : (modalStatus = INACTIVE_MODAL);
    return (
      <div>
        <button className="button is-primary" onClick={this.toggleModal}>
          Sign Up
        </button>
        <div className={modalStatus}>
          <div className="modal-background" />
          <div className="modal-card">
            <div className="modal-card-head">
              <h2 className="subtitle has-text-info">Sign up</h2>
            </div>
            <div className="modal-card-body">
              <div className="field">
                <label className="label">Nombre de usuario</label>
                <input
                  type="text"
                  placeholder="Your username"
                  onChange={this.handleUsernameChange}
                  value={this.state.username}
                />
              </div>
              <div className="field">
                <label className="label">Su email</label>
                <input
                  type="email"
                  placeholder="Your username"
                  onChange={this.handleEmailChange}
                  value={this.state.email}
                />
              </div>
              <div className="field">
                <label className="label">Contraseña</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePassword1Change}
                  value={this.state.password1}
                />
              </div>
              <div className="field">
                <label className="label">Confirme contraseña</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePassword2Change}
                  value={this.state.password2}
                />
              </div>
            </div>
            <div className="modal-card-foot">
              <h2 className="title is-danger">{this.state.errorMensage}</h2>
              <button
                className="button is-success"
                onClick={this.submitNewUser}
              >
                Sign Up
              </button>
              <button className="button is-danger" onClick={this.toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  museumView: () => dispatch(switchToMuseumView()),
  saveUser: payload => dispatch(saveUser(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

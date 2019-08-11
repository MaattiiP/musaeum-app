import React, { Component } from 'react';
import api from '../../../../api/api';
import { connect } from 'react-redux';
import { switchToMuseumView } from '../../../header/actions'
import { saveUser } from '../actions';

const ACTIVE_MODAL = "modal is-active";
const INACTIVE_MODAL = "modal";

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false,
      username: "",
      email: "",
      password1: "",
      password2: ""
    }
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
    })
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  handlePassword1Change(e) {
    this.setState({
      password1: e.target.value
    })
  }
  handlePassword2Change(e) {
    this.setState({
      password2: e.target.value
    })
  }
  submitNewUser() {
    api.postUserRegistration(
      this.state.username,
      this.state.email,
      this.state.password1,
      this.state.password2
    )
      .then(
        response => {
          this.props.saveUser(response.data);
          this.props.museumView();
        }
      )
      .catch(
        (error) => console.log(error)
      )
  }

  render() {
    let modalStatus;
    (this.state.status) ? modalStatus = ACTIVE_MODAL : modalStatus = INACTIVE_MODAL;
    return (
      <div>
        <button className="button is-primary" onClick={this.toggleModal}>Sign Up</button>
        <div className={modalStatus}>
          <div class="modal-background"></div>
          <div class="modal-card">
            <div className="modal-card-head">
              <h2 className="subtitle has-text-info">Sign up</h2>
            </div>
            <div className="modal-card-body">
              <div className="field">
                <label className="label">Nombre de usuario</label>
                <input type="text" placeholder="Your username" onChange={this.handleUsernameChange} />
              </div>
              <div className="field">
                <label className="label">Su email</label>
                <input type="email" placeholder="Your username" onChange={this.handleEmailChange} />
              </div>
              <div className="field">
                <label className="label" >Contraseña</label>
                <input type="password" placeholder="Password" onChange={this.handlePassword1Change} />
              </div>
              <div className="field">
                <label className="label">Confirme contraseña</label>
                <input type="password" placeholder="Password" onChange={this.handlePassword2Change} />
              </div>
            </div>
            <div class="modal-card-foot">
              <button class="button is-success" onClick={this.submitNewUser}>Sign Up</button>
              <button class="button is-danger" onClick={this.toggleModal}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
  museumView: () => dispatch(switchToMuseumView()),
  saveUser: (payload) => dispatch(saveUser(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

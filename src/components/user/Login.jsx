import React, { Component } from 'react'
import { connect } from 'react-redux';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: true
    }
  }

  render() {
    let modalStatus
    (this.state.status) ? modalStatus = "modal is-active" : modalStatus = "modal";
    return(
      <div className={modalStatus}>
        <div className="modal-background"></div>
        <div class="modal-content">
          <div class="field">
              <label class="label">Username</label>
              <div class="control has-icons-left has-icons-right">
                <input class="input is-success" type="text" placeholder="Username" value="" />
              </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    )
  }
}




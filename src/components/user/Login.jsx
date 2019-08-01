import React, { Component } from 'react'
import { connect } from 'react-redux';
import {switchToMuseumView} from '../header/actions'

const ACTIVE_MODAL = "modal is-active";
const INACTIVE_MODAL = "modal";

class Login extends Component {
  constructor(props) {
    super(props)
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
                <input className="input is-success" type="text" placeholder="You" value="" />
              </div>
              <label className="label">Password</label>
              <div className="control">
                <input className="input is-success" type="text" placeholder="****" value="" />
              </div>
          </div>
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

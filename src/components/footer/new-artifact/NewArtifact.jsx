import React, { Component } from 'react';
import { connect } from 'react-redux';

const ACTIVE = "dropdown is-up is-active";
const NO_ACTIVE = "dropdown is-up";

class NewArtifact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.show = this.show.bind(this);
  }
  show() {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    let status;
    (this.state.active) ? status = ACTIVE : status = NO_ACTIVE;
    return (
      <div className={status}>
        <div className="dropdown-trigger" >
          <button className="button" onClick={this.show}>
            <span className="title is-danger">+</span>
          </button>
        </div>
          <div className="dropdown-menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" placeholder="Text input" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(NewArtifact);


import React, { Component } from "react";

const ACTIVE_MODAL = "modal is-active";
const INACTIVE_MODAL = "modal";

export default class ArtifactModel extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
  }

  close() {
    this.props.closeCallback()
  }

  render() {
    let status;
    (this.props.modalStatus === true) ? status = ACTIVE_MODAL : status = INACTIVE_MODAL;
    return(
      <div className={status}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.artifactData.name}</p>
            <button className="delete" aria-label="close" onClick={this.close}></button>
          </header>
          <section className="modal-card-body">
            <figure className="image is-4by3">
              <img src={this.props.artifactData.picture} alt="X" />
            </figure>
            <p>{this.props.artifactData.description}</p>

          </section>
        </div>
      </div>
    )
  }
}

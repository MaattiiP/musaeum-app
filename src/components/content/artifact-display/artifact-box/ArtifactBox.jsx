import React, { Component } from "react";
import ArtifactModel from "./ArtifactModel";

export default class ArtifactBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalStatus: false
    }
    this.showStatus = this.showStatus.bind(this);
  }
  showStatus() {
    this.setState({
      modalStatus: !this.state.modalStatus
    })
  }
  render() {
    return (
      <div className="column is-narrow">
        <ArtifactModel 
          modalStatus={this.state.modalStatus}
          closeCallback={this.showStatus}
          artifactData={this.props}
        />
        <div className="box" onClick={this.showStatus}>
          <div className="content has-text-centered">
            <figure className="image is-128x128">
              <img src={this.props.picture} alt="X"/>
            </figure>
            <h1 className="title is-4">{this.props.name}</h1>
          </div>
        </div>
      </div>
    );
  }
}

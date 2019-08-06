import React, { Component } from "react";

export default class ArtifactBox extends Component {
  render() {
    return (
      <div className="column is-narrow">
        <div className="box">
          <div className="content has-text-centered">
            <figure className="image is-128x128">
              <img src={this.props.picture} alt="X"/>
            </figure>
            <h1 className="title is-4">{this.props.name}</h1>
            <p className="is-5">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class MuseumBox extends Component {
  render() {
    return (
      <div className="column is-narrow">
        <div className="box">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.logoURL} alt="X" />
              </figure>
            </div>
            <div className="media-content content">
              <p className="title is-4 is-spaced is-marginless">
                {this.props.shortName}
              </p>
              <p className="subtitle is-5 is-marginless">{this.props.completeName}</p>
              <p className="is-6">
                  {this.props.city}, {this.props.street}
              </p>
              <p className="subtitle is-5">{this.props.country}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

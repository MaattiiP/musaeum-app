import React, { Component } from 'react'

export default class MuseumBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="column is-4">
        <div className="box">
          <div className="media-content">
            <p className="title is-5 is-spaced is-marginless">{this.props.name}</p>
            <p className="subtitle is-marginless">{this.props.country}</p>
            <p className="content is-small">{this.props.city}</p>
          </div>

        </div>
      </div>
    )
  }
}

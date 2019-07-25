import React, { Component } from 'react'

export default class MuseumBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="box">
        <div className="media content">
          <p className="title is-5 is-spaced is-marginless">{this.props.name}</p>
        </div>

      </div>
    )
  }
}

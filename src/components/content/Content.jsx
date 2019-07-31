import React, { Component } from 'react';
import { connect } from 'react-redux';


import MuseumDisplay from './museum-display/MuseumDisplay';
import ArtifactDisplay from './artifact-display/ArtifactDisplay';


export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeDisplay: 'museums'
    }
  }



  render() {
    let display
    if (this.state.activeDisplay == 'museums') {
      display = <ArtifactDisplay />
    }

    return (
      <div>
        {display}
      </div>
    )
  }
};


import React, { Component } from 'react';
import { connect } from 'react-redux';


import MuseumDisplay from './museum-display/MuseumDisplay';
import ArtifactDisplay from './artifact-display/ArtifactDisplay';


class Content extends Component {
  constructor(props) {
    super(props)
  }


  componentDidUpdate() {
    console.log(this.props.header.activeView)
  }

  render() {
    let display

    if (this.props.header.activeView === 'museum'){
      display = <MuseumDisplay />
    } else if (this.props.header.activeView === 'artifact'){
      display = <ArtifactDisplay />
    }

    return (
      <div>
        {display}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  header: state.header
});

export default connect(mapStateToProps)(Content);

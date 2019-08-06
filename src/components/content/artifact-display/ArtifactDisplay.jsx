import React, { Component } from "react";
import { connect } from "react-redux";

import ArtifactBox from "./artifact-box/ArtifactBox";

import api from "../../../api/api";
import { saveArtifacts } from "./actions";

class ArtifactDisplay extends Component {
  componentWillMount() {
    api.getListArtifact().then(response => {
      this.props.saveArtifacts(response.data.results);
    });
  }

  render() {
    let artifactList = this.props.artifacts.artifactsList;
    const artifactBoxes = artifactList.map(artifact => (
      <ArtifactBox 
        key={artifact.id}
        picture={artifact.picture}
        name={artifact.name}
        description={artifact.description}
        museum={artifact.museum}
      />
    ));
    return <div className="columns is-mobile is-multiline is-vcentered">{artifactBoxes}</div>;
  }
}

const mapStateToProps = state => ({
  artifacts: state.artifacts
});
const mapDispatchToProps = dispatch => ({
  saveArtifacts: payload => dispatch(saveArtifacts(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtifactDisplay);

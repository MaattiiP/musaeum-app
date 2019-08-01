import React, { Component } from "react";
import { connect } from "react-redux";

import ArtifactBox from "./artifact-box/ArtifactBox";

import api from "../../../api/api";
import { saveArtifacts } from "./actions";

class ArtifactDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    api.getListArtifact().then(response => {
      this.props.saveArtifacts(response.data.results);
    });
  }

  render() {
    let artifactList = this.props.artifacts.artifactsList;
    const artifactBoxes = artifactList.map(artifact => (
      <ArtifactBox key={artifact.id} name={artifact.name} />
    ));
    return <div className="columns is-multiline">{artifactBoxes}</div>;
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

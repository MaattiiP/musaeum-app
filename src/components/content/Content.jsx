import React, { Component } from "react";
import { connect } from "react-redux";
import MuseumDisplay from "./museum-display/MuseumDisplay";
import ArtifactDisplay from "./artifact-display/ArtifactDisplay";

class Content extends Component {
  render() {
    let display;

    if (this.props.view === "museum") {
      display = <MuseumDisplay />;
    } else if (this.props.view === "artifact") {
      display = <ArtifactDisplay />;
    }

    return <div className="section">{display}</div>;
  }
}

const mapStateToProps = state => ({
  view: state.header.activeView
});

export default connect(mapStateToProps)(Content);

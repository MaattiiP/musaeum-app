import React, { Component } from "react";
import NewArtifact from "./new-artifact/new-artifact";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    if (this.props.view === "artifact" && this.props.user !== null) {
      return (
        <div className="container has-text-centered">
          <NewArtifact />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  view: state.header.activeView,
  user: state.user.userData
});

export default connect(mapStateToProps)(Footer);

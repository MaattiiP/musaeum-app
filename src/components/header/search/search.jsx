import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../../api/api";
import { saveArtifacts } from "../../view/artifact-view/actions";
import { saveMuseums } from "../../view/museum-view/actions";
import { saveMonuments } from "../../view/monument-view/actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    //THIS IS SOOOooOo WRONG
    switch (this.props.view) {
      case "museum":
        api
          .getSearchListMuseum(e.target.value)
          .then(response => this.props.saveMuseums(response.data.results));
        break;
      case "artifact":
        api
          .getSearchListArtifact(e.target.value)
          .then(response => this.props.saveArtifacts(response.data.results));
        break;
      case "monument":
        api
          .getSearchListMonument(e.target.value)
          .then(response => this.props.saveMonuments(response.data.results));
        break;
      default:
        return null;
    }
  }
  render() {
    return (
      <input
        type="text"
        className="input is-medium is-rounded"
        placeholder="Buscar"
        onChange={this.handleInput}
      />
    );
  }
}
const mapStateToProps = state => ({
  view: state.header.activeView
});
const mapDispatchToProps = dispatch => ({
  saveArtifacts: payload => dispatch(saveArtifacts(payload)),
  saveMuseums: payload => dispatch(saveMuseums(payload)),
  saveMonuments: payload => dispatch(saveMonuments(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

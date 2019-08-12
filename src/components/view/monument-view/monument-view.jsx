import React, { Component } from "react";
import { connect } from "react-redux";

import MonumentBox from "./monument-box/monument-box";

import api from "../../../api/api";
import { saveMonuments } from "./actions";

class MonumentDisplay extends Component {
  componentWillMount() {
    api.getListMonument().then(response => {
      this.props.saveMonuments(response.data.results);
    });
  }
  render() {
    let monumentList = this.props.monuments.monumentsList;
    const monumentBoxes = monumentList.map(monument => (
      <MonumentBox
        key={monument.id}
        picture={monument.picture}
        name={monument.name}
      />
    ));
    return (
      <div className="columns is-mobile is-multiline is-vcentered">
        {monumentBoxes}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  monuments: state.monuments
});
const mapDispatchToProps = dispatch => ({
  saveMonuments: payload => dispatch(saveMonuments(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonumentDisplay);

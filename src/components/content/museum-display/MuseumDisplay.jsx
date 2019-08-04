import React, { Component } from "react";
import { connect } from "react-redux";

import MuseumBox from "./museum-box/MuseumBox";

import api from "../../../api/api";
import { saveMuseums } from "./actions";

class MuseumDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    api.getListMuseum().then(response => {
      this.props.saveMuseums(response.data.results);
    });
  }

  render() {
    let museumList = this.props.museums.museumsList;
    const listOfMuseums = museumList.map(museum => (
      <MuseumBox
        key={museum.id}
        name={museum.short_name}
        country={museum.country}
        city={museum.city}
      />
    ));
    return <div className="columns is-multiline">{listOfMuseums}</div>;
  }
}

const mapStateToProps = state => ({
  museums: state.museums
});
const mapDispatchToProps = dispatch => ({
  saveMuseums: payload => dispatch(saveMuseums(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MuseumDisplay);

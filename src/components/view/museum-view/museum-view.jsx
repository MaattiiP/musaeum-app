import React, { Component } from "react";
import { connect } from "react-redux";

import MuseumBox from "./museum-box/museum-box";

import api from "../../../api/api";
import { saveMuseums } from "./actions";

class MuseumView extends Component {
  componentWillMount() {
    api.getListMuseum().then(response => {
      this.props.saveMuseums(response.data.results);
    });
  }

  render() {
    const listOfMuseums = this.props.museumsList.map(museum => (
      <MuseumBox
        key={museum.id}
        id={museum.id}
        shortName={museum.short_name}
        completeName={museum.complete_name}
        country={museum.country}
        city={museum.city}
        street={museum.street}
        logoURL={museum.logo}
      />
    ));
    return (
      <div className="columns is-mobile is-multiline is-vcentered">
        {listOfMuseums}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  museumsList: state.museums.museums
});
const mapDispatchToProps = dispatch => ({
  saveMuseums: payload => dispatch(saveMuseums(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MuseumView);

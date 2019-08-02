import React, { Component } from "react";
import { connect } from 'react-redux';
import api from "../../api/api";
import NewArtifact from "./new-artifact/NewArtifact";

class Footer extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit() {
    api.postArtifact(this.props.user.token)
      .then(response => console.log(response))
  }

  render() {
    return (
      <div className="container has-text-centered">
        <NewArtifact />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Footer);

import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../../api/api";

const ACTIVE = "dropdown is-up is-active";
const NO_ACTIVE = "dropdown";

class NewArtifact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,

      artifactName: "",
      artifactPicture: null,
      artifactPictureUrl: null,
      artifactDescription: "",
      artifactMuseum: 1
    };
    this.show = this.show.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleMuseumChange = this.handleMuseumChange.bind(this);
    this.submitArtifact = this.submitArtifact.bind(this);
  }
  show() {
    this.setState({
      active: !this.state.active,
      artifactName: "",
      artifactDescription: ""
    });
  }
  handleNameChange(e) {
    this.setState({
      artifactName: e.target.value
    });
  }
  handleImageChange(e) {
    this.setState({
      artifactPicture: e.target.files[0],
      artifactPictureUrl: URL.createObjectURL(e.target.files[0])
    });
  }
  deleteImage() {
    this.setState({
      artifactPicture: null,
      artifactPictureUrl: null
    });
  }
  handleDescriptionChange(e) {
    this.setState({
      artifactDescription: e.target.value
    });
  }
  handleMuseumChange(e) {
    this.setState({
      articactMuseum: Number(e.target.value)
    });
  }
  submitArtifact() {
    let data_form = new FormData();
    data_form.append("name", this.state.artifactName);
    data_form.append("description", this.state.artifactDescription);
    data_form.append("picture", this.state.artifactPicture);
    data_form.append("registrator", this.props.userData.pk);
    data_form.append("museum", this.state.artifactMuseum);
    api.postArtifact(this.props.userToken, this.props.userData.pk, data_form);
    this.show();
  }

  render() {
    let photo;
    if (this.state.artifactPicture === null) {
      photo = (
        <div className="field">
          <div className="file is-centered is-boxed is-success has-name">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="foto"
                accept="image/png, image/jpeg"
                onChange={this.handleImageChange}
              />
              <span className="file-cta">
                <span className="file-label">Foto</span>
              </span>
            </label>
          </div>
        </div>
      );
    } else {
      photo = (
        <div className="level">
          <div className="level-left">
            <figure className="image is-128x128">
              <img src={this.state.artifactPictureUrl} alt="Error" />
            </figure>
          </div>
          <div className="level-right">
            <button className="delete is-large" onClick={this.deleteImage} />
          </div>
        </div>
      );
    }
    let status;
    this.state.active ? (status = ACTIVE) : (status = NO_ACTIVE);
    return (
      <div className={status}>
        <div className="dropdown-trigger">
          <button className="button" onClick={this.show}>
            <p className="title has-text-danger">+</p>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    onChange={this.handleNameChange}
                    value={this.state.artifactName}
                  />
                </div>
              </div>
              {photo}
              <div className="field">
                <label className="label">Descripcion</label>
                <div className="control">
                  <textarea
                    className="textarea is-primary"
                    onChange={this.handleDescriptionChange}
                    value={this.artifactDescription}
                  />
                </div>
              </div>
              <button
                className="button is-medium is-primary"
                onClick={this.submitArtifact}
              >
                Guardar artefacto
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userToken: state.user.token,
  userData: state.user.userData,
  museums: state.museums.museums
});

export default connect(mapStateToProps)(NewArtifact);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import api from '../../../api/api'

const ACTIVE = "dropdown is-up is-active";
const NO_ACTIVE = "dropdown";

class NewArtifact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,

      artifactName: "",
      artifactPicture: null,
      artifactDescription: "",
      articactMuseum: 1
    }
    this.show = this.show.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.submitArtifact = this.submitArtifact.bind(this)
  }
  show() {
    this.setState({
      active: !this.state.active
    })
  }
  handleNameChange(e) {
    this.setState({
      artifactName: e.target.value
    })
  }
  handleImageChange(e) {
    this.setState({
      artifactPicture: e.target.files[0]
    })
  }
  handleDescriptionChange(e) {
    this.setState({
      artifactDescription: e.target.value

    })
  }
  submitArtifact() {
    let data_form = new FormData();
    data_form.append('name', this.state.artifactName);
    data_form.append('description', this.state.artifactDescription);
    data_form.append('picture', this.state.artifactPicture);
    data_form.append('registrator', this.props.userData.pk)
    data_form.append('museum', 1);
    api.postArtifact(
      this.props.userToken,
      this.props.userData.pk,
      data_form
    ).then(response => console.log(response))

  }

  render() {
    let status;
    (this.state.active) ? status = ACTIVE : status = NO_ACTIVE;
    return (
      <div className={status}>
        <div className="dropdown-trigger" >
          <button className="button" onClick={this.show}>
            <p className="title has-text-danger">+</p>
          </button>
        </div>
          <div className="dropdown-menu">
          <div className="dropdown-content">
            <div className="dropdown-item">

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" onChange={this.handleNameChange}/>
                </div>
              </div>


              <div class="field">
                <div class="file is-centered is-boxed is-success has-name">
                  <label class="file-label">
                    <input 
                      class="file-input" 
                      type="file" 
                      name="foto" 
                      accept="image/png, image/jpeg"  onChange={this.handleImageChange} 
                    />
                    <span class="file-cta">
                      <span class="file-label">
                        Foto
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              <div class="field">
                <label className="label">Description</label>
                <div class="control">
                  <textarea class="textarea is-primary" onChange={this.handleDescriptionChange} />
                </div>
              </div>

              <button className="button is-medium is-primary" onClick={this.submitArtifact}>Send</button>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userToken: state.user.token,
  userData: state.user.userData
});

export default connect(mapStateToProps)(NewArtifact);

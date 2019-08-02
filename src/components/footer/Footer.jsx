import React, { Component } from "react";
import { connect } from 'react-redux';
import api from "../../api/api"

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
      <nav className="tabs is-boxed is-fullwidth">
       <div className="container">
         <ul>
           <li className="subtitle is-active"><a onClick={this.submit} href={null}>+</a></li>
         </ul>
       </div>
     </nav>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Footer);

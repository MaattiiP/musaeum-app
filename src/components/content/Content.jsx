import React, { Component } from 'react'
import api from '../../api/api'
import MuseumBox from './museum-box/MuseumBox'

export default class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      response: []
    }
  }

  componentWillMount() {
    api.getListMuseum().then(
      response => {
        this.setState(state => ({
          response: response.data.results
        }))
      }
    )
  }


  render() {
    let museumList = this.state.response
    const listOfMuseums = museumList.map((museum) =>
      <MuseumBox key={museum.id} name={museum.short_name} />
    );
    return (
      <div className="section">
        {listOfMuseums}
      </div>
    )
  }
}

import React, { Component } from 'react'

import PeopleList from '../components/PeopleList'

export default class PeopleListContainer extends Component {

  state = {people: [{id: 1, name: 'Bob'}, {id: 2, name: 'Xavi'}, {id: 3, name: 'Marc-Andre'}]}

  render(){
    return (
      <PeopleList people={this.state.people} />
    )
  }
}

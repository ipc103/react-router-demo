import React from 'react'
import { Switch, Route, Link} from 'react-router-dom'

import Person from '../Person'
import './PeopleList.css'

export default ({people}) => {
  return (
    <div className='row'>
      <div className='col-4'>
        <ul>
          { people.map( person => <li key={person.id}><Link to={`/people/${person.id}`}>{person.name}</Link></li> ) }
        </ul>
      </div>
      <div className='col-8'>
      <Switch>
        <Route path="/people/:id" render={({match}) => {
          const person = people.find(person => person.id == match.params.id )
          return < Person person={person} />
        }}/>
      </Switch>
      </div>
    </div>
  )
}

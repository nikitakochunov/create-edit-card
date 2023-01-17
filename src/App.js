import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import CardPage from './components/cardPage'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/card/:type?' component={CardPage} />
        <Redirect to='/card' />
      </Switch>
    </div>
  )
}

export default App

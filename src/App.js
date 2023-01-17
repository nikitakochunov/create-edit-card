import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Card from './components/card'
import CardControl from './components/cardControl'

const App = () => {
  const [data, setData] = useState()

  const handleSubmit = (e, value, isValid) => {
    e.preventDefault()
    if (!isValid) return
    console.log('submit', e)
    setData(value)
  }

  return (
    <div>
      <Switch>
        <Route
          path='/control'
          render={() => <CardControl data={data} onSubmit={handleSubmit} />}
        />
        <Route path='/' exact render={() => <Card data={data} />} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App

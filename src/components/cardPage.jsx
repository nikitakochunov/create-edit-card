import React, { useState } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import Card from './card'
import CardControl from './cardControl/cardControl'

const CardPage = () => {
  const { type } = useParams()
  const history = useHistory()

  const dataFromStorage = JSON.parse(localStorage.getItem('user'))
  const [data, setData] = useState(dataFromStorage || undefined)

  const handleSubmit = (value) => {
    setData(value)
    update(value)
    goBack()
  }

  const update = (data) => {
    localStorage.setItem('user', JSON.stringify(data))
  }

  const goBack = () => {
    history.push('/card')
  }

  return type === 'control' ? (
    <CardControl data={data} onSubmit={handleSubmit} goBack={goBack} />
  ) : (
    <>
      <Redirect to='/card' />
      <Card data={data} />
    </>
  )
}

export default CardPage

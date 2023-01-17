import React, { useState } from 'react'
import CardCreateForm from './cardCreateForm'
import CardEditForm from './cardEditForm'
import Modal from '../modal'

const CardControl = ({ data, onSubmit, goBack }) => {
  const [value, setValue] = useState()
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (value) => {
    openModal()
    setValue(value)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const create = data ? false : true

  return (
    <>
      <Modal
        isShown={showModal}
        onClick={() => {
          closeModal()
          onSubmit(value)
        }}
      />
      {create ? (
        <CardCreateForm onSubmit={handleSubmit} />
      ) : (
        <CardEditForm data={data} onSubmit={handleSubmit} goBack={goBack} />
      )}
    </>
  )
}

export default CardControl

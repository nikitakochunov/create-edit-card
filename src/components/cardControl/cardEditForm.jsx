import React, { useEffect, useState } from 'react'
import TextField from '../textField'
import { validator } from '../../utils/validator'

const CardEditForm = ({ data, onSubmit, goBack }) => {
  const [value, setValue] = useState({
    name: data.name,
    lastName: data.lastName,
    birthDate: data.birthDate,
    portfolio: data.portfolio,
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid) return
    onSubmit(value)
  }

  const handleChange = ({ target }) => {
    setValue((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    name: {
      isRequired: { message: "Поле 'Имя' обязательно для заполнения" },
    },
    lastName: {
      isRequired: { message: "Поле 'Фамилия' обязательно для заполнения" },
    },
    birthDate: {
      isRequired: { message: "Поле 'Год рождения' обязательно для заполнения" },
      isCorrectDate: {
        value: 2023,
        message: "Поле 'Год рождения' некорректно",
      },
    },
    portfolio: {
      isRequired: { message: "Поле 'Портфолио' обязательно для заполнения" },
      isLink: { message: "Поле 'Портфолио' должно быть ссылкой" },
    },
  }

  useEffect(() => {
    validate()
  }, [value])

  const validate = () => {
    const errors = validator(value, validatorConfig)

    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 shadow p-4'>
            <h1 className='mb-4'>Редактировать</h1>
            <form onSubmit={handleSubmit} className='m-2 needs-validation'>
              <TextField
                label='Имя'
                name='name'
                type='text'
                value={value.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label='Фамилия'
                name='lastName'
                type='text'
                value={value.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <TextField
                label='Год рождения'
                name='birthDate'
                type='number'
                value={value.birthDate}
                onChange={handleChange}
                error={errors.birthDate}
              />
              <TextField
                label='Портфолио'
                name='portfolio'
                type='text'
                value={value.portfolio}
                onChange={handleChange}
                error={errors.portfolio}
              />
              <>
                <button
                  className='btn btn-secondary me-2'
                  type='button'
                  onClick={goBack}
                >
                  Назад
                </button>
                <button className='btn btn-primary' disabled={!isValid}>
                  Обновить
                </button>
              </>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardEditForm

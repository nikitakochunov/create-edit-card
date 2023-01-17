import React from 'react'

const TextField = ({ label, name, type, value, onChange, error }) => {
  const getInputClasses = () => {
    return 'form-control is-' + (error ? 'invalid' : 'valid')
  }

  return (
    <div className='mb-4'>
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        className={getInputClasses()}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        error={error}
      />
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

export default TextField

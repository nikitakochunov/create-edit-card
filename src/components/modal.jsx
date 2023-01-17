import React from 'react'

const Modal = ({ isShown, onClick }) => {
  return (
    <div
      className='modal'
      style={{
        background: 'rgba(0, 0, 0, .4)',
        display: isShown ? 'block' : '',
      }}
      tabIndex='-1'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-body'>Обновлено</div>
          <div className='modal-footer'>
            <button
              type='submit'
              className='btn btn-secondary'
              onClick={onClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

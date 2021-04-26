import React from 'react'
import { ZombieingDoodle } from 'react-open-doodles'
import ReactDOM from 'react-dom'
const Error = ({ message, statusCode }) => {
  const handleExit = () => {}
  return ReactDOM.createPortal(
    <div className='error-container'>
      <h1>Error</h1>
      {message ? <p>{message}</p> : ''}
      {statusCode ? <p>with status code {statusCode}</p> : ''}
      <button
        onClick={() => {
          handleExit()
        }}>
        OK
      </button>
    </div>,
    document.getElementById('portal')
  )
}

export default Error

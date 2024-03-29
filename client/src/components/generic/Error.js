import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'

import '../../styles/popup.css'
const Error = ({ message }) => {
  const [close, setClose] = useState(false)

  useEffect(() => {
    setClose(false)
  }, [message])
  return ReactDom.createPortal(
    <div className='box' style={{ display: !close ? '' : 'none' }}>
      <div className='content error'>
        <h1>Error</h1>
        {message ? <h3>{message}</h3> : <h3>Some error has occured.</h3>}
        <button onClick={() => setClose(true)}>OK</button>
      </div>
    </div>,
    document.getElementById('popup')
  )
}
export default Error

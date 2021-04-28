import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'

import '../../styles/popup.css'
const Success = ({ message }) => {
  const [close, setClose] = useState(false)

  useEffect(() => {
    setClose(false)
  }, [message])
  return ReactDom.createPortal(
    <div className='box' style={{ display: !close ? '' : 'none' }}>
      <div className='content success'>
        <h1>Success</h1>
        {message ? <h3>{message}</h3> : <h3>Success</h3>}
        <button onClick={() => setClose(true)}>OK</button>
      </div>
    </div>,
    document.getElementById('popup')
  )
}
export default Success

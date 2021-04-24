import { autorun } from 'mobx'
import React, { useEffect, useRef } from 'react'
import FormComponent from './FormComponent'

const Modal = ({ state }) => {
  let modalRef = useRef()
  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (!modalRef.current === null || !modalRef.current.contains(e.target)) {
        state.setOpen(false)
      }
    })
  }, [])
  return (
    <div
      ref={modalRef}
      style={{
        margin: 'auto',
        verticalAlign: 'middle',
        position: 'absolute',
        display: `${state.open ? 'block' : 'none'}`,
        backgroundColor: '#ff5678',
        width: '78%',
        height: '80%',
      }}>
      <FormComponent />
    </div>
  )
}

export default Modal

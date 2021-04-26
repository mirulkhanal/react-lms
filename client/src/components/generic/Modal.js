// import { autorun } from 'mobx'
import React, { useEffect, useRef } from 'react'
import AddStudentFormComponent from './AddStudentFormComponent'

const Modal = ({ state }) => {
  let modalRef = useRef(undefined)
  const something = () => {
    document.addEventListener('mousedown', (e) => {
      if (
        modalRef &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        state.setOpen(false)
      }
    })
  }
  useEffect(() => {
    something()
    return something
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
        width: '50%',
        height: '80%',
        boxShadow: '5px 5px 15px 5px #000000',
      }}>
      <AddStudentFormComponent />
    </div>
  )
}

export default Modal

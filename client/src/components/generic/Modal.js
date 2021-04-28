// import { autorun } from 'mobx'
import React, { useEffect, useRef } from 'react'
import AddStudentFormComponent from '../admin/Student/AddStudentFormComponent'
import ReactDom from 'react-dom'
import { ZombieingDoodle } from 'react-open-doodles'
import '../../styles/modal.css'
import { ImgContainer } from '../login/Login-styled-components'
import styled from 'styled-components'
import { ImCross } from 'react-icons/im'

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
  return ReactDom.createPortal(
    <div
      className='modal-outer'
      style={{
        position: 'absolute',
        display: `${state.open ? '' : 'none'}`,
        width: '100vw',
        backgroundColor: 'rgba(0,0,0,0.5)',
        top: 0,
        left: 0,
        height: '100vh',
        boxShadow: '5px 5px 15px 5px #000000',
      }}>
      <div
        ref={modalRef}
        className='modal-inner'
        style={{ display: `${state.open ? '' : 'none'}` }}>
        <Close />
        <div className='modal-content'>
          <ClipContainer>
            <ZombieingDoodle />
          </ClipContainer>
          <AddStudentFormComponent state={state} />
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}
export const ClipContainer = styled(ImgContainer)`
  & > svg {
    width: 50%;
  }
`
export const Close = styled(ImCross)`
  position: absolute;
  padding: 10px;
  right: 0;
  top: 0;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`
export default Modal

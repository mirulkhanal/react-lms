import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import TableComponent from '../../generic/TableComponent'
import { REQUEST_METHODS, STUDENT_COLUMNS } from '../../../constants'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from '../../generic/Modal'
import useApi from '../../../hooks/useApi'
import Error from '../../generic/Error'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
const Student = () => {
  // const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const { loading, error, data } = useApi(
    'http://localhost:5000/students',
    null,
    REQUEST_METHODS.GET
  )

  const handleToggleModal = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    // <Error message='Hello' />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80vw',
        flexDirection: 'column',
        background: '#ffeddf',
        position: 'absolute',
        right: 0,
      }}>
      <Modal state={{ open, setOpen }} />
      <button
        style={{ display: !open ? '' : 'none' }}
        onClick={() => {
          handleToggleModal()
        }}>
        <FaPlusCircle /> Add Student
      </button>{' '}
      <br />
      {loading ? (
        <Loader type='Puff' color='#ff335c' height={100} width={100} />
      ) : error ? (
        <Error message={error} />
      ) : data ? (
        <TableComponent records={data} open={open} COLUMNS={STUDENT_COLUMNS} />
      ) : (
        <Loader type='ThreeDots' color='#ff335c' height={100} width={100} />
      )}
    </div>
  )
}

export default Student

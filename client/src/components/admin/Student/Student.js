import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import TableComponent from '../../generic/TableComponent'
import { REQUEST_METHODS, STUDENT_COLUMNS } from '../../../constants'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from '../../generic/Modal'
import useApi from '../../../hooks/useApi'

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
        background: '#ffeddf',
      }}>
      <button
        onClick={() => {
          handleToggleModal()
        }}>
        <FaPlusCircle /> Add Student
      </button>

      <Modal state={{ open, setOpen }} />

      {loading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : data ? (
        <TableComponent records={data} open={open} COLUMNS={STUDENT_COLUMNS} />
      ) : (
        <p>Request timed out</p>
      )}
    </div>
  )
}

export default Student

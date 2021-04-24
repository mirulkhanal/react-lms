import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import TableComponent from '../../generic/TableComponent'
import { STUDENT_COLUMNS } from '../../../constants'
import { FaPlusCircle } from 'react-icons/fa'
import Modal from '../../generic/Modal'

const Student = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const requestData = async () => {
    const response = await axios.get('http://localhost:5000/students')
    setData(response.data.results)
  }

  const handleToggleModal = () => {
    setOpen((prevState) => !prevState)
  }

  useEffect(() => {
    requestData()

    return requestData
  }, [])

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
      {data && <TableComponent records={data} COLUMNS={STUDENT_COLUMNS} />}
    </div>
  )
}

export default Student

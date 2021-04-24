import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableComponent from '../../generic/TableComponent'
import { COURSE_COLUMNS } from '../../../constants'

const Course = () => {
  const [data, setData] = useState([])
  const requestData = async () => {
    const response = await axios.get('http://localhost:5000/courses')
    setData(response.data.courses)
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
        background: '#ffeddf',
      }}>
      {data && <TableComponent records={data} COLUMNS={COURSE_COLUMNS} />}
    </div>
  )
}

export default Course

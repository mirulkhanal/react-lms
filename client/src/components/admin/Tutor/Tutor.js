import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableComponent from '../../generic/TableComponent'
import { TUTOR_COLUMNS } from '../../../constants'

const Tutor = () => {
  const [data, setData] = useState([])
  const requestData = async () => {
    const response = await axios.get('http://localhost:5000/tutors')
    setData(response.data.results)
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
      {data && <TableComponent records={data} COLUMNS={TUTOR_COLUMNS} />}
    </div>
  )
}

export default Tutor

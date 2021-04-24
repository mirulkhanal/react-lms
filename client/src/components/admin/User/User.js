import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableComponent from '../../generic/TableComponent'
import { USER_COLUMNS } from '../../../constants'

const User = () => {
  const [data, setData] = useState([])
  const requestData = async () => {
    const response = await axios.get('http://localhost:5000/users')
    setData(response.data.users)
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
      {data && <TableComponent records={data} COLUMNS={USER_COLUMNS} />}
    </div>
  )
}

export default User

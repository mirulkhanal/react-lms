// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TableComponent from '../../generic/TableComponent'
import { REQUEST_METHODS, USER_COLUMNS } from '../../../constants'
import useApi from '../../../hooks/useApi'
import Error from '../../generic/Error'
const User = () => {
  const [userData, setUserData] = useState(null)
  const { data, loading, error } = useApi(
    'http://localhost:5000/user',
    null,
    REQUEST_METHODS.GET,
    (data) => {
      setUserData(data)
    }
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: '#ffeddf',
      }}>
      {userData ? (
        <TableComponent records={data} COLUMNS={USER_COLUMNS} />
      ) : error ? (
        <Error message={error} />
      ) : loading ? (
        <p>loading</p>
      ) : (
        'Something went wrong'
      )}
    </div>
  )
}

export default User

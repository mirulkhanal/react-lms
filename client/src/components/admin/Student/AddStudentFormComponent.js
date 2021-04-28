import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { REQUEST_METHODS } from '../../../constants'
import useApi from '../../../hooks/useApi'
import '../../../styles/forms.css'
import Error from '../../generic/Error'
import { poster } from '../../../hooks/postAxios'
import Success from '../../generic/Success'
const AddStudentFormComponent = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [modules, setModules] = useState([])
  const [selectedModule, setSelectedModule] = useState('CS')
  const [postError, setPostError] = useState(null)
  const [postLoading, setPostLoading] = useState(false)
  const [success, setSuccess] = useState(null)

  const { loading, error, data } = useApi(
    'http://localhost:5000/modules',
    null,
    (res) => {
      setModules(res)
    }
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    poster(
      'http://localhost:5000/students/add',
      {
        name,
        address,
        email,
        contact: phone,
        moduleID: selectedModule,
      },
      setSuccess,
      setPostError,
      setPostLoading,
      () => {
        // setName('')
        // setAddress('')
        // setEmail('')
        // setPhone('')
        console.log(postError)
        console.log(postLoading)
        console.log(success)
      }
    )
  }

  useEffect(() => {}, [postError])
  return (
    <>
      {postError ? (
        <Error message={postError} />
      ) : postLoading ? (
        <p>Loading</p>
      ) : success ? (
        <Success message={success} />
      ) : (
        ''
      )}

      <form>
        <input
          type='text'
          placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='number'
          placeholder='Phone number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <select
          value={selectedModule}
          onChange={(e) => {
            setSelectedModule(e.target.value)
          }}>
          {modules &&
            modules.map((module) => (
              <option key={module.moduleID} value={module.moduleID}>
                {module.moduleName}
              </option>
            ))}
          <option style={{ display: 'none' }} value='default'>
            Select a module
          </option>
        </select>

        <button type='submit' onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </>
  )
}

export default AddStudentFormComponent

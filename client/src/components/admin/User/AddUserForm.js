import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { REQUEST_METHODS } from '../../../constants'
import useApi from '../../../hooks/useApi'
import '../../../styles/forms.css'
import Error from '../../generic/Error'

const AddStudentFormComponent = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [modules, setModules] = useState([])
  const [selectedModule, setSelectedModule] = useState('CS')
  const [postError, setPostError] = useState(null)
  const [postLoading, setPostLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setPostLoading(true)
    await axios
      .post('http://localhost:5000/students/add', {
        name,
        address,
        email,
        contact: phone,
        moduleID: selectedModule,
      })
      .then((res) => {
        setPostError(null)
        setPostLoading(false)
      })
      .catch((err) => {
        console.log('thisgoes here')
        if (err.response) {
          setPostError(err.response.data.error)
          console.log('this has response')
        } else {
          setPostError('Something wrong happened')
        }
        console.log('this excutes at last in catch')
        setPostLoading(false)
      })
      .finally(() => {
        setPostLoading(false)
      })
    setName('')
    setAddress('')
    setEmail('')
    setPhone('')
  }
  useEffect(() => {}, [postError])
  return (
    <>
      {postError ? (
        <Error message={postError} />
      ) : postLoading ? (
        <p>Loading</p>
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

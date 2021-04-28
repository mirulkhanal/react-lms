import React, { useContext, useState } from 'react'
import {
  LoginButton,
  TextBox,
  ImgContainer,
  LoginContainer,
  TextBoxContainer,
} from './Login-styled-components'
import { ReadingSideDoodle } from 'react-open-doodles'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import Error from '../generic/Error'

const Login = () => {
  // saving the username and password to the app state
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const { getLoggedIn } = useContext(AuthContext)
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    await axios
      .post('http://localhost:5000/auth/login', {
        username,
        password,
      })
      .then(() => {
        getLoggedIn()
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        if (err.response) {
          setError(err.response.data.error)
          console.log(err.response.data.error)
        }
      })
  }
  return (
    <div
      style={{
        display: 'flex',
        width: '90vw',
        height: '90vh',
        backgroundColor: '#ffeddf',
        boxShadow: '2px 13px 56px 9px #0D1321',
      }}>
      <LoginContainer>
        {loading === true ? (
          <p>Loading</p>
        ) : error ? (
          <Error message={error} />
        ) : (
          ''
        )}
        <TextBoxContainer>
          <TextBox
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            spellCheck='false'
          />
          <TextBox
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
          />
        </TextBoxContainer>
        <LoginButton onSubmit={handleLogin} onClick={handleLogin} />
      </LoginContainer>
      <ImgContainer>
        <ReadingSideDoodle />
      </ImgContainer>
    </div>
  )
}

export default Login

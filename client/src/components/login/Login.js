import React, { useContext, useState, useEffect } from 'react'
import {
  LoginButton,
  TextBox,
  ImgContainer,
  LoginContainer,
  TextBoxContainer,
} from './Login-styled-components'
import { ACCOUNT_TYPE } from '../../constants'
import { ReadingSideDoodle } from 'react-open-doodles'
import axios from 'axios'
import AuthContext from '../../context/AuthContext'
import { useHistory } from 'react-router'

const Login = () => {
  // saving the username and password to the app state
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { getLoggedIn } = useContext(AuthContext)
  const handleLogin = async () => {
    try {
      await axios.post('http://localhost:5000/auth/login', {
        username,
        password,
      })
      getLoggedIn()
    } catch (err) {
      console.log(err)
    }
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
        <LoginButton onClick={handleLogin}>Login</LoginButton>
      </LoginContainer>
      <ImgContainer>
        <ReadingSideDoodle />
      </ImgContainer>
    </div>
  )
}

export default Login

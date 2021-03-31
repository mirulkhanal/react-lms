import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(undefined)
  const [userType, setUserType] = useState(undefined)

  const getLoggedIn = async () => {
    const loginStatus = await axios.get('http://localhost:5000/auth/verify')
    if (!loginStatus.data.verified) setLoggedIn(false)
    else if (loginStatus.data.verified && loginStatus.data.type) {
      setLoggedIn(loginStatus.data.verified)
      setUserType(loginStatus.data.type)
    } else {
      console.log('Error occured')
    }
  }
  useEffect(() => {
    getLoggedIn()
  }, [])
  return (
    <AuthContext.Provider
      value={{ loggedIn, getLoggedIn, userType, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

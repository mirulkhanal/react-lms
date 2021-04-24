import React, { useContext, useEffect } from 'react'
import Login from './login/Login'
import { Redirect, Route, Switch } from 'react-router-dom'
import '../styles/App.css'
import { ACCOUNT_TYPE } from '../constants'
import Admin from './admin/Admin'
import Student from './student/Student'
import AuthContext from '../context/AuthContext'
import Tutor from './admin/Tutor/Tutor'
const App = () => {
  const { loggedIn, getLoggedIn, userType } = useContext(AuthContext)
  useEffect(() => {
    getLoggedIn()
    return getLoggedIn
  }, [getLoggedIn])
  return (
    <div className='app'>
      <Route path='/'>
        {!loggedIn ? (
          <Redirect to='/login' />
        ) : userType === ACCOUNT_TYPE.ADMIN ? (
          <Redirect to='/admin' />
        ) : userType === ACCOUNT_TYPE.TEACHER ? (
          <Redirect to='/tutor' />
        ) : (
          <Redirect to='/student' />
        )}
      </Route>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route path='/student' component={Student} />
        <Route path='/tutor' component={Tutor} />
      </Switch>
    </div>
  )
}

export default App

import React from 'react'
import { SidebarContainer } from '../Navbar/Navbar-styled-components'
import Dashboard from './Dashboard'
import SideBar from '../Navbar/SideBar'
import { Switch, Route } from 'react-router-dom'
import Student from './Student/Student'

const Admin = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffeddf',
        height: '100vh',
        width: '100vw',
      }}>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <Switch>
        <Route path='/admin/students' component={Student} />
        <Route path='/admin' component={Dashboard} />
      </Switch>
    </div>
  )
}

export default Admin

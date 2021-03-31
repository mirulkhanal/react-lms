import React from 'react'
import { SidebarContainer } from '../../Navbar/Navbar-styled-components'
import SideBar from '../../Navbar/SideBar'
import {
  StudentTable,
  Header,
  Content,
  StudentAdd,
} from './Student-styled-components'
import { LoginButton, TextBox } from '../../login/Login-styled-components'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Student = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffeddf',
      }}>
      <SidebarContainer>
        <SideBar />
      </SidebarContainer>
      <div style={{ flex: '0.85', display: 'flex', flexDirection: 'column' }}>
        <StudentTable>
          <Header>Student ID</Header>
          <Header>First Name</Header>
          <Header>Last Name</Header>
          <Header>Address</Header>
          <Header>Contact Number</Header>
          <Header>Edit/Delete</Header>

          <Content>123</Content>
          <Content>Shiwangsh</Content>
          <Content>KC</Content>
          <Content>Dhapasi</Content>
          <Content>98696969</Content>
          <Content>
            <FaEdit /> <MdDelete />
          </Content>

          <Content>123</Content>
          <Content>Shiwangsh</Content>
          <Content>KC</Content>
          <Content>Dhapasi</Content>
          <Content>98696969</Content>
          <Content>
            <FaEdit /> <MdDelete />
          </Content>

          <Content>123</Content>
          <Content>Shiwangsh</Content>
          <Content>KC</Content>
          <Content>Dhapasi</Content>
          <Content>98696969</Content>

          <Content>
            <FaEdit /> <MdDelete />
          </Content>

          <Content>123</Content>
          <Content>Shiwangsh</Content>
          <Content>KC</Content>
          <Content>Dhapasi</Content>
          <Content>98696969</Content>
          <Content>
            <FaEdit /> <MdDelete />
          </Content>

          <Content>123</Content>
          <Content>Shiwangsh</Content>
          <Content>KC</Content>
          <Content>Dhapasi</Content>
          <Content>98696969</Content>
          <Content>
            <FaEdit /> <MdDelete />
          </Content>
        </StudentTable>
      </div>
      <StudentAdd>
        <label>First Name</label>
        <TextBox placeholder='First Name' spellCheck='false' />

        <label>Last Name</label>
        <TextBox placeholder='Last Name' spellCheck='false' />

        <label>Staff ID</label>
        <TextBox placeholder='Staff ID' spellCheck='false' />

        <label>Address</label>
        <TextBox placeholder='Address' spellCheck='false' />

        <label>Contact Number</label>
        <TextBox placeholder='Contact Number' spellCheck='false' />

        <label>Select Course</label>

        <LoginButton>Submit</LoginButton>
      </StudentAdd>
    </div>
  )
}

export default Student

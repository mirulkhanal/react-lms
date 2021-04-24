import React from 'react'
import { SidebarUL, StyledLink, UserImage } from './Navbar-styled-components'
import { MdHome } from 'react-icons/md'
import {
  FaBook,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCloudSunRain,
} from 'react-icons/fa'
import { BsCalendarFill } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div
      style={{
        width: '50vw',
        height: '100vh',
        padding: '0',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SidebarUL>
        <StyledLink to='/admin'>
          Home <MdHome />
        </StyledLink>
        <StyledLink to='/admin/courses'>
          Courses <FaBook />
        </StyledLink>
        <StyledLink to='/admin/students'>
          Students <FaUserGraduate />
        </StyledLink>
        <StyledLink to='/admin/tutors'>
          Tutors <FaChalkboardTeacher />
        </StyledLink>{' '}
        <StyledLink to='/admin/users'>
          Users <FaChalkboardTeacher />
        </StyledLink>
        <StyledLink to='/admin/attendance'>
          Attendance <BsCalendarFill />
        </StyledLink>
        <StyledLink to='/admin/assignments'>
          Assignments <FaCloudSunRain />
        </StyledLink>
      </SidebarUL>
      <div>
        <UserImage>
          <FaUserGraduate />
        </UserImage>
      </div>
    </div>
  )
}

export default SideBar

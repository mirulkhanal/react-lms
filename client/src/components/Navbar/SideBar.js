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
          Course <FaBook />
        </StyledLink>
        <StyledLink to='/admin/students'>
          Student <FaUserGraduate />
        </StyledLink>
        <StyledLink to='/admin/staffs'>
          Staff <FaChalkboardTeacher />
        </StyledLink>
        <StyledLink to='/admin/attendance'>
          Attendance <BsCalendarFill />
        </StyledLink>
        <StyledLink to='/admin/assignments'>
          Assignment <FaCloudSunRain />
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

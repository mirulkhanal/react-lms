import React from 'react'
import { SidebarUL, StyledLink, UserImage } from './Navbar-styled-components'
import { MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
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
        <StyledLink>
          Course <FaBook />
        </StyledLink>
        <StyledLink to='/admin/students'>
          Student <FaUserGraduate />
        </StyledLink>
        <StyledLink>
          Staff <FaChalkboardTeacher />
        </StyledLink>
        <StyledLink>
          Attendance <BsCalendarFill />
        </StyledLink>
        <StyledLink>
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

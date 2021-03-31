import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const SidebarContainer = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: #ff5678;
  display: flex;
  margin: 0;
`

export const SidebarUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Josefin Sans', sans-serif;
  width: 100%;
  & > li {
    padding: 20px;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > li:hover {
    background-color: #ffeddf;
    color: #000;
    transition: ease-out 0.5s;
    cursor: pointer;
  }
`
export const UserImage = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #ffeddf;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5em;
  padding: 20px;
  &:hover {
    color: black;
    background-color: white;
  }
`

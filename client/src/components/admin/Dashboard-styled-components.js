// import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NoticeBoard = styled.div`
  width: 800px;
  height: 500px;
  background-color: #faf4d3;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 7px 0px 34px 18px #fbc3bc;
  & > p {
    font-size: 1.3rem;
    padding: 30px;
  }
  & > ul > li {
    padding: 10px;
  }
`
// export const NavLink = styled(Link)`
//   text-decoration: none;
//   color: #000;
//   font-size: 1.2rem;
//   padding: 20px;
// `

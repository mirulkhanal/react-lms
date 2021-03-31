import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 30%;
  height: 100%;
  background: #ff5678;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const ImgContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 80%;
  }
`
export const TextBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  margin: 10px;
  & > input {
    margin: 10px;
  }
`
export const TextBox = styled.input`
  width: 18vw;
  height: 50px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  text-align: center;
  &:focus {
    border: 3px solid #ffeddf;
    background-color: #737373;
    outline: none;
    transition: ease-out 0.2s;
    color: #ffffff;
  }
  &::placeholder {
    color: #b09e99;
    /* padding-left: 20px; */
  }
`
export const LoginButton = styled.button`
  width: 167px;
  height: 47px;
  background: #0d1321;
  color: #ffffff;
  font-size: 1.1em;
  cursor: pointer;
  border: none;
  transition: ease-in 0.3s;
  box-shadow: -2px 3px 21px -2px rgba(0, 0, 0, 0.84);
  &:hover {
    transition: ease-out 0.2s;
    box-shadow: -2px 3px 21px 3px rgba(0, 0, 0, 0.84);
  }
`

import styled from "styled-components";

export const StudentTable = styled.div`
    /* border: 1px solid black;
    width: 400px;
    height:300px;
    margin-top: 20px;
    border-collapse:collapse; 
    &>tr>th { 
        background-color:#FF5678;
        color:white; 
        padding:30px;
}
    &>tr>td { 
        text-align: center;
} */

    display:grid;
    grid-template-columns: auto auto auto auto auto auto;

    width: 1000px;
    height:600px;
    background-color:#FAF4D3;
    margin:30px;
    box-shadow: 7px 0px 34px 18px #FBC3BC;
    font-family: 'Josefin Sans', sans-serif;
    font-size:1.3rem;

`

export const Header = styled.div`
   background-color:#FF5678;
   color:#fff;
   border: 1px solid rgba(0, 0, 0, 0.8);
   padding: 20px;
   text-align: center;
`
export const Content = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    text-align: center;
`
export const StudentAdd = styled.div`
    width:500px;
    height:600px;
    background-color:#8A7968;
    color:#fff;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;

    &>label{
        font-family: 'Josefin Sans', sans-serif;
        font-size:1.3em;
        margin:10px;
    }
    &>input{
        border-radius:3px;
    }
`
import React from 'react'
import { SidebarContainer } from '../Navbar/Navbar-styled-components'
import SideBar from '../Navbar/SideBar'
import { LoginButton, TextBox, ImgContainer, LoginContainer,TextBoxContainer } from '../login/Login-styled-components'
import { Header,StaffTable,Content,StaffAdd } from './Staff-styled-components'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const Staff = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"#ffeddf",}}>           
         <SidebarContainer>
                <SideBar/> 
            </SidebarContainer>
            <div style={{flex:'0.85',display:"flex",flexDirection:'column'}}>
            <StaffTable>
                <Header>S.N.</Header>
                <Header>Student ID</Header>
                <Header>First Name</Header>
                <Header>Last Name</Header>
                <Header>Address</Header>
                <Header>Contact Number</Header>
                <Header>Edit/Delete</Header>

            <Content>1</Content>
            <Content>S.raii</Content>
            <Content>Simron</Content>
            <Content>Rai</Content>
            <Content>Nakhipot</Content>
            <Content>9800992093</Content>
            <Content><FaEdit/> <MdDelete/></Content>

            <Content>1</Content>
            <Content>S.raii</Content>
            <Content>Simron</Content>
            <Content>Rai</Content>
            <Content>Nakhipot</Content>
            <Content>9800992093</Content>
            <Content><FaEdit/> <MdDelete/></Content>

            <Content>1</Content>
            <Content>S.raii</Content>
            <Content>Simron</Content>
            <Content>Rai</Content>
            <Content>Nakhipot</Content>
            <Content>9800992093</Content>
            <Content><FaEdit/> <MdDelete/></Content>

            <Content>1</Content>
            <Content>S.raii</Content>
            <Content>Simron</Content>
            <Content>Rai</Content>
            <Content>Nakhipot</Content>
            <Content>9800992093</Content>
            <Content><FaEdit/> <MdDelete/></Content>

            <Content>1</Content>
            <Content>S.raii</Content>
            <Content>Simron</Content>
            <Content>Rai</Content>
            <Content>Nakhipot</Content>
            <Content>9800992093</Content>
            <Content><FaEdit/> <MdDelete/></Content>

            
 
                {/* <tr>
                    <th>Student ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Contact Number</th>

                </tr>
                <tr>
                    <td>123</td>
                    <td>Mirul</td>
                    <td>Khanal</td>
                    <td>Grande</td>
                    <td>980420420</td>
                </tr>
                <tr>
                    <td>456</td>
                    <td>Shiwangsh</td>
                    <td>KC</td>
                    <td>Grande</td>
                    <td>986969696</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>Mirul</td>
                    <td>Khanal</td>
                    <td>Grande</td>
                    <td>980420420</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>Mirul</td>
                    <td>Khanal</td>
                    <td>Grande</td>
                    <td>980420420</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>Mirul</td>
                    <td>Khanal</td>
                    <td>Grande</td>
                    <td>980420420</td>
                </tr>
                <tr>
                    <td>123</td>
                    <td>Mirul</td>
                    <td>Khanal</td>
                    <td>Grande</td>
                    <td>980420420</td>
                </tr> */}
                </StaffTable>
          
      
        </div>
          <StaffAdd>
                    <label>First Name</label>
                    <TextBox placeholder='First Name'spellCheck="false"/>

                    <label>Last Name</label>
                    <TextBox placeholder='Last Name'spellCheck="false"/>

                    <label>Staff ID</label>
                    <TextBox placeholder='Staff ID'spellCheck="false"/>

                    <label>Address</label>
                    <TextBox placeholder='Address'spellCheck="false"/>

                    <label>Contact Number</label>
                    <TextBox placeholder='Contact Number'spellCheck="false"/>

                    <label>Select Course</label>
                    

                    <LoginButton>Submit</LoginButton>
    </StaffAdd>
        </div>
    )
}

export default Staff

import React from 'react'
// import { Link } from 'react-router-dom'
import { NoticeBoard } from './Dashboard-styled-components'

const Dashboard = () => {
  return (
    <div
      style={{
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <NoticeBoard>
        <h1>Announcements / Notice Board</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </NoticeBoard>
    </div>
  )
}

export default Dashboard

import React from 'react'
import './Landing.scss'
import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';

const Landing = () => {
 
  return (
    <div className='landing'>
      <h2>Choose a Chat Room</h2>
      <div className="chat-room-list">
        {chatRooms.map((room) => (
          <Link to={`/room/${room.id}`} className="item" key={room.id}>
            <p>{room.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Landing
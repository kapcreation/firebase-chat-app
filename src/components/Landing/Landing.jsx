import React, { useState } from 'react'
import './Landing.scss'
import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import JoinRoomInput from './JoinRoomInput';

const Landing = () => {
  const [roomToJoin, setRoomToJoin] = useState('')
 
  return (
    <div className='landing'>
      <h2>Join a Chat Room</h2>
      <JoinRoomInput />

      <h2>Or choose a Chat Room</h2>
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
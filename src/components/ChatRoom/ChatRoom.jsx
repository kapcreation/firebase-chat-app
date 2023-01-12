import React from 'react'
import './ChatRoom.scss'
import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import MessageInput from '../MessageInput/MessageInput';
import MessageList from '../MessageList/MessageList';

const ChatRoom = () => {
  const params = useParams();

  const room = chatRooms.find((x) => x.id === params.id);
  if (!room) {
    // TODO: 404
  }

  return (
  <div className='chat-room'>
    <div className="top">
      <h3>{room.title}</h3>
      <Link to="/">⬅️ Back</Link>
    </div>
    <div className="messages-container">
      <MessageList roomId={room.id} />
      <MessageInput roomId={room.id} />
    </div>
  </div>
)
}

export default ChatRoom
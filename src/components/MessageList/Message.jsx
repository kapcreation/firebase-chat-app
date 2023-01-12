import React from 'react'
import userIcon from '../../assets/user.png'

const Message = ({ message, isOwnMessage }) => {
  const { photoURL, displayName, text } = message;

  return (
    <div className={['message', isOwnMessage && 'own-message'].join(' ')}>
      <img src={photoURL || userIcon} alt="" />
      <div className='text'>
        <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4>
        <div>{text}</div>
      </div>
    </div>
  );
}

export default Message
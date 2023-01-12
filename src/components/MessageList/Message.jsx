import React from 'react'

const Message = ({ message, isOwnMessage }) => {
  const { displayName, text } = message;

  return (
    <div className={['message', isOwnMessage && 'own-message'].join(' ')}>
      <h4 className="sender">{isOwnMessage ? 'You' : displayName}</h4>
      <div>{text}</div>
    </div>
  );
}

export default Message
import React from 'react';
import { useAuth } from '../../context/auth';
import useMessages from '../../hooks/useMessages';
import Message from './Message';
import './MessageList.scss';

const MessageList = ({ roomId }) => {
  const element = React.useRef(null);
  const { user } = useAuth();
  const messages = useMessages(roomId);

  React.useLayoutEffect(() => {
    if (element.current) {
      element.current.scrollTop = element.current.scrollHeight;
    }
  });

  return (
    <div className="message-list" ref={element}>
      {messages.map((x) => (
        <Message
          key={x.id}
          message={x}
          isOwnMessage={x.uid === user.uid}
        />
      ))}
    </div>
  )
}

export default MessageList
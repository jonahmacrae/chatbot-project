import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/user.png'

import './ChatMessage.css'

const SENDER_USER = 'user';
const SENDER_ROBOT = 'robot';

function ChatMessage({message, sender}) {
  return(
    <div
      className={
        sender === SENDER_USER 
        ? 'chat-message-user' 
        : 'chat-message-robot'
      }
    >
      {sender === SENDER_ROBOT && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div
        className='chat-message-text'
      >
        {message}
      </div>
      {sender === SENDER_USER && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}

export default ChatMessage;
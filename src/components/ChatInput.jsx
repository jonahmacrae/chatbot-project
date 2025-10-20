import { useState } from 'react'

import { Chatbot } from 'supersimpledev';

import LoadMessageGif from '../assets/loading-spinner.gif'

import './ChatInput.css'

const SENDER_USER = 'user';
const SENDER_ROBOT = 'robot';
const DEFAULT_TEXT_INPUT_STATE = '';
const DEFAULT_PLACEHOLDER_TEXT = 'Send a message to Chatbot';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState(DEFAULT_TEXT_INPUT_STATE);
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages, 
      {
        message: inputText,
        sender: SENDER_USER,
        id: crypto.randomUUID()
      }
    ];

    setInputText(DEFAULT_TEXT_INPUT_STATE);
    setChatMessages(newChatMessages);

    setChatMessages([
      ...newChatMessages, 
      {
        message: <img src={LoadMessageGif} className="loading-spinner"/>,
        sender: SENDER_ROBOT,
        id: crypto.randomUUID()
      }
    ]);

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages, 
      {
        message: response,
        sender: SENDER_ROBOT,
        id: crypto.randomUUID()
      }
    ]);

    setIsLoading(false);
  }

  const handleKeyDown = (event) => {
    if ((event.key === 'Enter') && inputText.trim() !== '') {
      !isLoading && sendMessage();
    }

    if (event.key === 'Escape') {
      setInputText(DEFAULT_TEXT_INPUT_STATE);
    }
  };

  return (
    <div
      className="chat-input-container"
    >
      <input 
        placeholder={DEFAULT_PLACEHOLDER_TEXT}
        size="30"
        onChange={saveInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        className="chat-input"
      /> 
      <button
        onClick={(isLoading || !inputText.trim()) ? () => {} : sendMessage}
        className="send-button"
      >Send</button>  
    </div>
  );
}

export default ChatInput;
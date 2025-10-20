import { useState } from 'react'

import ChatInput from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'

import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div
      className="app-container"
    > 
      <ChatMessages 
        chatMessages={chatMessages}
      />

      {!chatMessages.length && (
          <p
            className="welcome-message"
          >
            Welcome to the chatbot project! Send a message using the textbox below.
          </p>
        )}

      <ChatInput 
        chatMessages={chatMessages} 
        setChatMessages={setChatMessages}
      /> 
    </div>
  );
}

export default App

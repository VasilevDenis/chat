import { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Messages from './components/messages/Messages';
import './App.css';
import UserForm from './components/userForm/UserForm';

function App() {
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nameAccepted, setNameAccepted] = useState(true);

  useEffect(() => {
    const ws = new WebSocket('wss://localhost');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);

      console.log('Received message:', message);

      if (message.type === "autorization") {
        if (message.status === "false") {
          setNameAccepted(false);
          return
        }
      }
      setFormSubmitted(true);
      if (message.users) {
        setUsers(message.users);
      }

      if (message.messages) {
        setMessages(message.messages);
      }
    };

    setWs(ws);

    return () => {
    };
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (user.trim() !== '') {
      if (ws) {
        ws.send(JSON.stringify({ type: "autorization", user: user }));
      }
    }
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (user.trim() !== '') {
      if (ws) {
        ws.send(JSON.stringify({ type: "message", user: user, message: message}));
        setMessage('')
      }
    }
  };

  return (
    <div className="app">
      {!formSubmitted ? (
        <UserForm
        handleNameSubmit={handleNameSubmit}
        user={user}
        setUser={setUser}
        nameAccepted={nameAccepted}/>
      ) : (
        <>
          <Users users={users} />
          <Messages
          user={user}
          messages={messages}
          message={message}
          setMessage={setMessage}
          handleSubmit={handleMessageSubmit}/>
        </>
      )}
    </div>
  );
}

export default App;

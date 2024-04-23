import React from 'react';
import './messageForm.css';

function Form({ message, setMessage, handleSubmit }) {
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
    <div className='input-submit-wrapper'>
      <input
        className="input"
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message..."
      />
      <button type="submit" className="button">Send</button>
    </div>
  </form>

  );
}

export default Form;

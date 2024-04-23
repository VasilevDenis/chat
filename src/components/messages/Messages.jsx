import './messages.css';
import MessageForm from '../messageForm/MessageForm';
import stringToBrightColor from '../utils/styleUtils';


function Messages({ user, messages, message, setMessage, handleSubmit }) {
    return (
        <div className="messages">
            <h2>Messages</h2>
            <div className='messages-list'>
                {messages.map((msg, index) => (
                    <div
                    className={user === msg.user ? ("message-box right") : ("message-box left")}
                    key={index}>
                        <div className='user-date'>
                            <span className='date'>{msg.date}</span>&nbsp;&nbsp;
                            <span style={{ color: stringToBrightColor(msg.user) }}>{msg.user}</span>&nbsp;&nbsp;&nbsp;
                        </div>
                        <div className='message-text'>{msg.message}</div>
                    </div>
                ))}
            </div>

            <MessageForm
                message={message}
                setMessage={setMessage}
                handleSubmit={handleSubmit}
            />
        </div>
    );
}

export default Messages;

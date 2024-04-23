import './userForm.css'


const UserForm = ({ handleNameSubmit, user, setUser, nameAccepted }) => {
  return (
    <>
      <form className="user-form" onSubmit={handleNameSubmit}>
      <h1 className='header'>Fast chat</h1>
          <div className="status">{!nameAccepted ? ("The name is already taken") : ("")}</div>
          <input className="input-user" type="text" placeholder="Enter your name" value={user} onChange={(e) => setUser(e.target.value)} />
          <button className="button-user" type="submit">Start conversation</button>
      </form>
    </>
  );
};

export default UserForm;

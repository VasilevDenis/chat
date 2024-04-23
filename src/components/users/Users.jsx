import './users.css'
import stringToBrightColor from '../utils/styleUtils';

function Users({ users }) {
  if (!users || !Array.isArray(users)) {
    console.error('No users data available');
    return <div>No users data available</div>;}
  return (
    <div className="users">
      <h2>Users online</h2>
      <ul className='list'>
        {users.map((user, index) => (
          <li key={index}>
            <span style={{ color: stringToBrightColor(user) }}>{user}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users

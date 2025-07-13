import { useContext } from 'react';
import { AuthContext } from '../contex/authContex.jsx';
import './Dashboard.css';
import { logout } from '../api.js';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <h2>Loading...</h2>;
  }

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null); // Clear context
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const { name, email, image } = user;

  return (
    <div className="dashboard-container">
      <div className="user-card">
        <img src={image} alt="User" className="user-image" />
        <h2>{name}</h2>
        <p>{email}</p>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;

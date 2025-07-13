// src/components/PublicRoute.jsx
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contex/authContex.jsx'; // Adjust the import path as necessary
import { useContext } from 'react';

function PublicRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h3>Loading...</h3>;

  // 👇 if logged in, redirect to dashboard
  return user ? <Navigate to="/dashboard" /> : children;
}

export default PublicRoute;

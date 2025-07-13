import './App.css'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute.jsx';

function App() {
  const GoogleAuthWrapper = () => {
    return <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Login />
    </GoogleOAuthProvider>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<PublicRoute><GoogleAuthWrapper /></PublicRoute>} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

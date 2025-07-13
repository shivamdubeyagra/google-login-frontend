import { useGoogleLogin } from '@react-oauth/google';
import './Login.css';
import { loginWithGoogle } from '../api';

function Login() {

  const responseGoogle = async (response) => {
    try {
      if (response.code) {
        const result = await loginWithGoogle(response.code);
        const { email } = result.user;
        if (email) {
          window.location.reload();
        }
      }
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: 'auth-code',
  });

  const handleManualRedirect = () => {
    window.location.reload();
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <p className="info-text">
        👉 First, sign in using your Google account below.<br />
        🌀 If you return back to this page after login,<br />
        <strong>click the text below to enter Dashboard</strong>.
      </p>

      <hr className="divider" />

      <button className="google-login-button" onClick={googleLogin}>
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          className="google-icon"
        />
        Sign in with Google
      </button>

      <p className="dashboard-link" onClick={handleManualRedirect}>
        Click here to go to dashboard
      </p>
    </div>
  );
}

export default Login;

import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ✅ Needed to send/receive cookies
});

export const loginWithGoogle = async (code) => {
  try {
    const response = await api.post(`/google?code=${code}`);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error?.response?.data || error.message);
    throw error;
  }
};
export const getCurrentUser = async () => {
  const res = await api.get('/me');
  return res.data.user;
};

export const logout = async () => {
  const res = await api.post('/logout');
  return res.data;
};
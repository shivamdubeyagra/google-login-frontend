# 🌐 Google OAuth2 Frontend (React)

This is the frontend of a Google login authentication system built using **React**, **Axios**, and deployed on **Netlify**. It connects with a backend (Express + MongoDB + JWT) to handle secure login, logout, and user session management using **HttpOnly cookies**.

---

## 🚀 Live Demo

👉 [Live Site](https://google-login-frontend.netlify.app)

---

## 📸 Features

- 🔒 Google OAuth 2.0 Login
- 🍪 HttpOnly JWT cookie authentication
- 🔁 Persistent user session via cookies
- 🚪 Logout functionality
- ✅ Protected route access (`/dashboard`)
- 🌐 Fully deployed on Netlify (frontend) and Render (backend)

---

## 🔧 Tech Stack

- **React** (Vite)
- **Axios** for API requests
- **Netlify** for deployment
- **Google OAuth2** for login
- **JWT (HttpOnly cookie)** for auth (handled by backend)

---

## 🏗️ Project Structure

---

## 🔐 How Authentication Works

1. User clicks **Login with Google**
2. Redirected to Google for consent
3. Google returns a `code` to frontend
4. Frontend sends `POST /google` with the code to backend
5. Backend exchanges code → gets user info + issues JWT token
6. JWT token is stored in an **HttpOnly cookie**
7. Frontend uses `/me` endpoint to fetch current user
8. Logout clears the cookie and redirects to login page

---

## 📁 .env Example (Vite)


---

## 💻 Run Locally

# 1. Clone the repo
git clone [https://github.com/your-username/google-login-frontend.git](https://github.com/shivamdubeyagra/google-login-frontend.git)

# 2. Install dependencies
cd google-login-frontend
npm install

# 3. Add .env file with your backend API URL
# 4. Run locally
npm run dev



import React from 'react';
import ReactDOM from 'react-dom/client';  // Add this line
import App from './App.jsx';
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
// import { AuthProvider } from '../store/auth.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthProvider>
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
  // </AuthProvider>

);


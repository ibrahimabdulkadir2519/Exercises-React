import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    login();
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <div className="max-w-md mx-auto py-12 text-center">
    
      <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
      <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
        You must log in to access the Create Post page and share your stories with the world.
      </p>
      
      <button 
        onClick={handleLogin}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        Log In Instantly
      </button>
    </div>
  );
};

export default Login;
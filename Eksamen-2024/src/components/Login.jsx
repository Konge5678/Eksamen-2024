import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/loaned-items');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mx-auto p-4 mb-28">
      <h2 className="text-xl font-bold mb-4">Admin Logg inn</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Brukernavn:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Passord:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
        </div>
        <button type="submit" className="bg-customGreen hover:bg-teal-700 text-white font-bold rounded px-4 py-2">
          Log inn
        </button>
      </form>
    </div>
  );
};

export default Login;

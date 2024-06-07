// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/");
    } else {
      setError("Ugyldig brukernavn eller passord");
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen mt-20">
      <h2 className="text-xl font-bold mb-4">Logg Inn</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Brukernavn</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Passord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Logg Inn
          </button>
          <a href="/forgot-password" className="text-sm text-customGreen">
            Glemt passord?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;

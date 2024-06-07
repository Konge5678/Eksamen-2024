import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/app");
    } else {
      setError("Ugylig brukernavn eller passord");
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen mt-20">
      <h2 className="text-4xl font-bold mb-4">Logg Inn</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2">Brukernavn:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 mb-4 w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Passord:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Logg Inn
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;

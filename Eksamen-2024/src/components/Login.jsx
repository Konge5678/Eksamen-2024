import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/");
    } else {
      setError("Ugyldige legitimasjonsbeskrivelser");
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-4">Logg inn</h2>
      <form onSubmit={handleLogin}>
        <label className="block mb-2">Brukernavn:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <label className="block mb-2">Passord:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-customGreen hover:bg-teal-700 text-white font-bold rounded px-4 py-2">
          Logg inn
        </button>
      </form>
      <div className="mt-4">
        <Link to="/forgot-password" className="underline">
          Glemt passord?
        </Link>
      </div>
    </div>
  );
};

export default Login;

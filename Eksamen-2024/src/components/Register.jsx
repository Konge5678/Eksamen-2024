import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    register(username, password);
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Registrer ny bruker</h2>
      <form onSubmit={handleRegister}>
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
          className="bg-customGreen hover:bg-teal-700 text-white font-bold rounded px-4 py-2"
        >
          Registrer
        </button>
      </form>
    </div>
  );
};

export default Register;

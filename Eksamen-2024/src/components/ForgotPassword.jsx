// src/components/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resetPassword(username, newPassword)) {
      navigate("/login");
    } else {
      setError("Brukernavn ikke funnet");
    }
  };

  return (
    <div className="container mx-auto p-4 mt-20 min-h-screen">
      <h2 className="text-4xl font-bold mb-4">Tilbakestill passord</h2>
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
          <label className="block mb-2">Nytt passord:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Tilbakestill passord
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;

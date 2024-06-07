import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { forgotPassword } = useAuth();
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    forgotPassword(username, newPassword);
    navigate("/login");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Glemt passord</h2>
      <form onSubmit={handleForgotPassword}>
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
          className="bg-customGreen hover:bg-teal-700 text-white font-bold rounded px-4 py-2"
        >
          Oppdater passord
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

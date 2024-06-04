import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAdmin, login, logout } = useAuth();

  return (
    <div className="flex justify-between items-center h-24 bg-gray-200 border-b-4 border-customGreen px-4">
      <div className="flex justify-start items-center">
        <Link to="/">
          <img src="/logo.svg" alt="Innlandet" className="h-14" />
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <Link to="/app" className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Lån
        </Link>
        <Link to="/loaned-items" className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Returner
        </Link>
        {isAdmin ? (
          <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        ) : (
          <button onClick={login} className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Admin Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

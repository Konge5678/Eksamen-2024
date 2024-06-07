import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, isAdmin, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 border-b-4 border-customGreen">
      <div className="container mx-auto px-4 flex justify-between items-center h-24">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.svg" alt="Innlandet" className="h-14" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/app"
            className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Lån
          </Link>
          <Link
            to="/loaned-items"
            className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Returner
          </Link>
          {currentUser ? (
            <>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
              >
                Logg ut
              </button>
              <span className="text-gray-800 font-bold">
                {currentUser.username}
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Logg Inn
              </Link>
              <Link
                to="/register"
                className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
              >
                Registrer
              </Link>
            </>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-200">
          <Link
            to="/app"
            onClick={toggleMenu}
            className="block bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded my-2 mx-4"
          >
            Lån
          </Link>
          <Link
            to="/loaned-items"
            onClick={toggleMenu}
            className="block bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded my-2 mx-4"
          >
            Returner
          </Link>
          {currentUser ? (
            <>
              <button
                onClick={() => {
                  toggleMenu();
                  logout();
                }}
                className="block w-full bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded my-2 mx-4 w-40"
              >
                Logg ut
              </button>
              <span className="block text-gray-800 font-bold py-2 px-4">
                {currentUser.username}
              </span>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded my-2 mx-4"
              >
                Logg Inn
              </Link>
              <Link
                to="/register"
                onClick={toggleMenu}
                className="block bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded my-2 mx-4"
              >
                Registrer
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

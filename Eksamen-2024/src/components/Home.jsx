import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4 mt-40 min-h-screen">
      <h1 className="text-2xl font-bold mb-16">
        Velkommen til 2-INF utstyr oversikt
      </h1>
      <button
        className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-60 h-60 text-xl m-2"
        onClick={() => navigate("/app")}
      >
        Lån
      </button>
      <button
        className="bg-customGreen hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-60 h-60 text-xl m-2"
        onClick={() => navigate("/loaned-items")}
      >
        Returner
      </button>
    </div>
  );
};

export default Home;

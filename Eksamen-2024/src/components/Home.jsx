import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4 mt-10">
      <h1 className="text-2xl font-bold mb-6">Velkommen til 2-INF utstyr oversikt</h1>
      <button 
        className="bg-customGreen hover:bg-teal-700 text-white font-bold py-4 px-8 rounded" 
        onClick={() => navigate('/app')}
      >
        Lån
      </button>
      <button 
        className="bg-customGreen hover:bg-teal-700 text-white font-bold py-4 px-8 rounded" 
        onClick={() => navigate('/loaned-items')} 
      >
        Returner
      </button>
    </div>
  );
}

export default Home;

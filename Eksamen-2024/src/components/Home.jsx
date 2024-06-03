import React from 'react';

const Home = () => {
    return (
        <div className="text-center space-y-4 mt-10">
            <h1 className="text-2xl font-bold mb-6">Velkommen til 2-INF utstyr oversikt</h1>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded" onClick={() => console.log('Lån button clicked')}>Lån</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded" onClick={() => console.log('Returner button clicked')}>Returner</button>
        </div>
    );
}

export default Home;
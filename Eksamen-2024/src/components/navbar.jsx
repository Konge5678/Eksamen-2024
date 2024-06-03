import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-center items-center h-24 bg-gray-200 border-b-2 border-green-500">
      <div className="flex justify-center items-center">
        <img src="/logo.svg" alt="Innlandet" className="h-14" />
      </div>
    </div>
  );
}

export default Navbar;
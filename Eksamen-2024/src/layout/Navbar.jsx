import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-start items-center h-24 bg-gray-200 border-b-4 border-customGreen">
      <div className="flex justify-start items-center ml-7">
        <a href="/">
          <img src="/logo.svg" alt="Innlandet" className="h-14" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

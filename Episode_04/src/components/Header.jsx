import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className=" w-full flex px-12 py-6 justify-between items-center ">
      <div>
        <img
          src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"
          alt="logo"
          className="w-[100px]"
        />
      </div>

      <div>
        <ul className=" flex gap-4 text-xl">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>

          <li>
            <NavLink href="/about">About</NavLink>
          </li>

          <li>
            <NavLink href="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>

      <button
        onClick={() => setIsAuthenticated(!isAuthenticated)}
        className={`px-4 cursor-pointer py-2  font-semibold rounded-xl transition-all duration-500 ease-in-out transform ${
          isAuthenticated
            ? "bg-red-500 text-white hover:bg-red-600 scale-105"
            : "bg-blue-500 text-white hover:bg-blue-600 scale-105"
        }`}
      >
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Header;

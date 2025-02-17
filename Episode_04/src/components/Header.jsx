import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="w-full flex px-12 py-6 justify-between items-center">
      <div>
        <img
          src="https://i.pinimg.com/736x/08/3b/2f/083b2fe2646cd064e3a294bb716810f9.jpg"
          alt="logo"
          className="w-[100px]"
        />
      </div>

      <div>
        <ul className="flex gap-4 text-xl">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : ""}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : ""}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : ""}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : ""}>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>

      <button
        onClick={() => setIsAuthenticated(!isAuthenticated)}
        className={`px-4 cursor-pointer py-2 font-semibold rounded-xl transition-all duration-500 ease-in-out transform ${
          isAuthenticated
            ? "bg-red-500 text-white hover:bg-red-600 scale-105"
            : "bg-orange-500 text-white hover:bg-orange-600 scale-105"
        }`}
      >
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default Header;

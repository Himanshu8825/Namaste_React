import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" w-full flex px-12 py-6 justify-between ">
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
    </div>
  );
};

export default Header;

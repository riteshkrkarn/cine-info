// import React from 'react'
import { useState } from "react";
import SearchIcon from "./../assests/searchIcon.svg";
import BurgerIcon from "./../assests/burgerIcon.svg";
import CrossIcon from "./../assests/crossIcon.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBurger, setIsBurger] = useState(BurgerIcon);

  const handleClick = () => {
    setIsActive(!isActive);
    setIsBurger(isBurger === BurgerIcon ? CrossIcon : BurgerIcon);
  };

  return (
    <div>
      <div
        className={`bg-zinc-400 w-full h-16 flex items-center justify-between ${
          isActive ? "active" : ""
        }`}
      >
        <div className="flex items-center gap-2 ml-4">
          <span
            className="md:hidden w-7 hover:cursor-pointer"
            onClick={handleClick}
          >
            <img src={isBurger} alt="Burger Icon" className="w-full" />
          </span>
          <span className="ml-2 font-playwrite">Cine Info</span>
        </div>
        <div className="w-1/3 hidden md:flex md:justify-between md:gap-2">
          <button>Home</button>
          <button>Now Playing</button>
          <button>Popular</button>
          <button>TV Series</button>
        </div>
        <div className="flex justify-center items-center gap-6">
          <span className="w-7 hover:cursor-pointer">
            <img src={SearchIcon} alt="Search" className="w-full" />
          </span>
          <button
            type="submit"
            className="mr-4 border-black border-2 rounded-full p-2 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

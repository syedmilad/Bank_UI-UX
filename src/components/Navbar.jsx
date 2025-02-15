import React, { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center py-6">
      <img className="w-[128px] h-[32px]" src={logo} alt="hero image" />
      <ul className="flex justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index + 1}
            className={`list-none sm:flex hidden font-poppins text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center sm:hidden flex">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toggle ? close : menu}
          alt="Toggle Btn"
          onClick={() => setToggle((prev) => !prev)}
        />

        {toggle && (
          <div className="flex p-6 min-w-[140px] border borde-white mx-4 my-2 rounded-xl bg-black-gradient sidebar absolute top-20  right-0 ">
            <ul className="flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={index + 1}
                  className={`list-none flex font-poppins text-[16px] text-white ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

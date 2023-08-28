import React, { useState } from "react";
import { identity, linkMenu } from "../../constants/data";
import { Link } from "react-router-dom";
import { MdMenuOpen, MdOutlineClose } from "react-icons/md";
const Header = () => {
  const { name } = identity;

  const [isOpen, setIsOpen] = useState(false); // State untuk mengontrol keadaan tombol

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow-md sticky top-0 w-full z-30 bg-white">
      <nav className="container max-w-screen flex justify-between p-6 mx-auto items-center">
        <div className="text-primary">
          <Link to="/" className="text-xl md:text-2xl font-bold text-primary">
            👨‍💻{name}
          </Link>
        </div>
        <div className="">
          <ul className="menu gap-8 flex max-md:hidden">
            {linkMenu.map(({ title, href }, index) => (
              <li key={index} className="hover:text-secondary">
                <a href={`${href}`}>{title}</a>
              </li>
            ))}
          </ul>
          <ul
            className={`menu-mobile gap-8 flex md:hidden fixed ${
              isOpen
                ? "top-[5.5rem] opacity-100"
                : "opacity-0 pointer-events-none top-16"
            } transition-all duration-300 ease-in-out rounded-b-xl shadow-lg right-1 bg-white p-7 flex-col`}
          >
            {linkMenu.map(({ title, href }, index) => (
              <li key={index} className="hover:text-secondary">
                <a href={`${href}`}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={`md:hidden ${
            isOpen ? "transform rotate-90" : ""
          } transition duration-200 ease-in-out`}
          onClick={handleToggleMenu}
        >
          {isOpen ? (
            <MdOutlineClose className="w-8 h-8" />
          ) : (
            <MdMenuOpen className="w-8 h-8" />
          )}
        </button>
        {/* <div className="">
          <a href="#">☀️</a>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;

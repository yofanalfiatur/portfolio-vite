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
    <header className="shadow-md sticky top-0 w-full z-50 bg-white">
      <nav className="container max-w-screen flex justify-between p-6 mx-auto items-center">
        <div className="text-primary">
          <Link to="/" className="text-3xl font-bold text-primary">
            👨‍💻{name}
          </Link>
        </div>
        <div className="flex">
          <ul className="gap-8 max-md:fixed max-md:top-20 max-md:rounded-xl max-md:shadow-lg max-md:right-3 flex bg-opacity-80 bg-white max-md:p-7 max-md:flex-col">
            {linkMenu.map(({ title, href }, index) => (
              <li key={index} className="">
                <Link to={`${href}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
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
        </div>
        <div className="">
          <a href="#">☀️</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

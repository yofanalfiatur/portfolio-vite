import React from "react";
import { identity, linkMenu } from "../../constants/data";
import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
const Header = () => {
  const { name } = identity;
  return (
    <header className="shadow-md">
      <nav className="container max-w-screen flex justify-between p-6 mx-auto items-center">
        <div className="text-primary">
          <Link to="/" className="text-3xl font-bold text-primary">
            👨‍💻{name}
          </Link>
        </div>
        <div className="flex">
          <ul className="gap-8 hidden md:flex">
            {linkMenu.map(({ titile, href }, index) => (
              <li key={index}>
                <Link to={linkMenu[index].href}>{linkMenu[index].titile}</Link>
              </li>
            ))}
          </ul>
          <button className="md-hidden">
            <MdMenuOpen />
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

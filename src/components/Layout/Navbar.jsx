import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";

const Navbar = ({ active }) => {
  return (
    <div className="flex flex-col 800px:flex-row 800px:space-x-1 space-y-2 800px:space-y-0">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="relative animate-slideIn 800px:animate-none"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <Link
            to={item.url}
            className={`${
              active === index + 1
                ? "text-white bg-primary-50 800px:bg-transparent 800px:text-white"
                : "text-white 800px:text-text-white hover:text-blue-200 hover:bg-red-50 800px:hover:bg-transparent"
            } uppercase block px-4 py-3 800px:py-2 font-bold text-[14px] transition-all duration-200 rounded-lg 800px:rounded-none relative hover:scale-105 800px:hover:scale-100 transform `}
          >
            {item.title}
            {active === index + 1 && (
              <div className="hidden bg-blue-100 800px:block absolute bottom-0 left-0 w-full h-0.5 rounded-t-sm"></div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;

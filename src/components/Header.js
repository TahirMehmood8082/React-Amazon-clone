import React from "react";
import { HiOutlineMenu, HiOutlineShoppingCart, HiSearch } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="bg-amazon_blue p-2 flex items-center flex-wrap">
      {/* Logo */}
      <div className="flex-grow">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
          className="w-28 object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-grow bg-yellow-400 flex items-center">
        <select className="bg-gray-100 p-2">
          <option>All</option>
        </select>
        <input type="text" className="p-2 w-full" placeholder="Search Amazon" />
        <HiSearch className="p-2 h-10" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        <div className="text-white">
          <p>Hello, Sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>
        <div className="text-white">
          <p>Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
        <div className="text-white relative">
          <HiOutlineShoppingCart className="h-10 w-10" />
          <span className="absolute top-0 right-0 bg-yellow-400 rounded-full px-2">
            0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import Logo from "../assets/logo.png";
import User from "../assets/avatar.png";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-4 px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={'/'}className="flex items-center gap-2">
          <motion.img src={Logo} alt="logo" className="w-12 object-cover" whileTap={{scale: 0.6}}/>
          <p className="text-headingColor text-xl font-bold">FP Delivery</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-black duration-100 transition-all ease-in-out cursor-pointer ">
              Home
            </li>
            <li className="text-base text-textColor hover:text-black duration-100 transition-all ease-in-out cursor-pointer ">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-black duration-100 transition-all ease-in-out cursor-pointer ">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-black duration-100 transition-all ease-in-out cursor-pointer ">
              Contact
            </li>
          </ul>
          <div className="relative flex justify-center items-center">
            <MdShoppingCart
              size={24}
              className="text-textColor cursor-pointer"
            />
            <div className="absolute -top-2 -right-5 w-5 h-5 bg-cartNumBg rounded-full flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={User}
            alt="user_image"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;

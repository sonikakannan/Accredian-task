import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { IconButton } from "@mui/material";

const TopNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
   <div className="shadow-md">
     <nav className=" flex justify-between items-center container mx-auto px-3 py-5">
      <div className="flex items-center gap-5">
        <img src={logo} alt="logo" />
        <button className="hidden lg:flex justify-between items-center bg-blue-500 text-white px-4 py-2 text-lg font-medium rounded-md">
          Courses
          <RiArrowDropDownLine className="w-7 h-7" />
        </button>
      </div>
      {/* Desktop Menu */}
      <div className="hidden lg:flex  items-center gap-3">
        <ul className="flex items-center gap-3 text-lg font-medium cursor-pointer">
          <li>Refer & Earn</li>
          <li>Resources</li>
          <li>About Us</li>
        </ul>
        <button className="cursor-pointer bg-gray-200 px-4 py-2 rounded-md text-lg font-medium">Login</button>
        <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-medium">Try for free</button>
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-between gap-4">
        <button className="flex justify-between items-center bg-blue-500 text-white px-4 py-2 text-lg font-medium rounded-md">
          Explore
          <RiArrowDropRightLine className="w-7 h-7" />
        </button>
        <IconButton onClick={toggleDrawer(true)}>
          <HiOutlineMenuAlt3 className="w-7 h-7 cursor-pointer" />
        </IconButton>
      </div>
      
  {/* Sidebar Component */}
  <Sidebar open={open} toggleDrawer={toggleDrawer} />
    </nav>
   </div>
  );
};

export default TopNavbar;
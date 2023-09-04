import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

function Navbar() {
  const [activeLink, setActiveLink] = useState("Login");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar w-full h-[160px] bg-sky-700">
      <div className="nav-body w-full flex flex-col h-full p-3">
        <div className="nav-head h-3/4 w-full text-center flex flex-row space-x-5 items-center justify-center">
          <h1 className="text-[20pt] font-semibold text-white">Smart Speaker</h1>
          <img src={logo} alt="Logo" className="w-[100px]" />
        </div>

        <div className="nav-links flex justify-between w-[60%] mx-auto">
          <ul className="w-full flex justify-between">
            <Link
              to="Home"
              className={`block h-full p-2 w-full text-center mx-3 rounded-md  ${
                activeLink === "Home"
                  ? "bg-sky-300 text-black"
                  : "border-white text-white bg-sky-700 border-b-2"
              }`}
              onClick={() => handleClick("Home")}
            >
              <li>Home</li>
            </Link>

            <Link
              to="/"
              className={`block h-full p-2 w-full text-center mx-3 rounded-md border-white ${
                activeLink === "Live Record"
                  ? "bg-sky-300 text-black"
                  : "border-white text-white bg-sky-700 border-b-2"
              }`}
              onClick={() => handleClick("Live Record")}
            >
              <li>Live Record</li>
            </Link>

            

            <Link
              to="FinalReport"
              className={`block h-full p-2 w-full text-center mx-3 rounded-md  border-white ${
                activeLink === "Final Report"
                  ? "bg-sky-300 text-black"
                  : "border-white text-white bg-sky-700 border-b-2"
              }`}
              onClick={() => handleClick("Final Report")}
            >
              <li>Final Report</li>
            </Link>

            <Link
              to="ContactUs"
              className={`block h-full p-2 w-full text-center mx-3 rounded-md border-white ${
                activeLink === "Contact us"
                  ? "bg-sky-300 text-black"
                  : "border-white text-white bg-sky-700 border-b-2"
              }`}
              onClick={() => handleClick("Contact us")}
            >
              <li>Contact us</li>
            </Link>

            <Link
              to="AboutUs"
              className={`block h-full p-2 w-full text-center mx-3  rounded-md border-white ${
                activeLink === "About us"
                  ? "bg-sky-300 text-black"
                  : "border-white text-white bg-sky-700 border-b-2"
              }`}
              onClick={() => handleClick("About us")}
            >
              <li>About us</li>
            </Link>



            <Link
              to="/"
              className={`block h-full p-2 w-full text-center mx-3 rounded-md  border-white ${
                activeLink === "Login"
                  ? "bg-sky-300 text-black"
                  : "border-white text-white bg-sky-700 border-b-2"
              }`}
              onClick={() => handleClick("Login")}
            >
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbottom() {
  const [activeLink, setActiveLink] = useState("Emotions");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="w-full flex justify-center mb-10 text-center mt-3">
      <ul className="flex space-x-5">
        <li>
          <Link
            to="/Emotions"
            className={`p-3 rounded-md ${
              activeLink === "Emotions" ? "bg-sky-300 text-black" : "bg-white border-sky-700 border-b-2"
            }`}
            onClick={() => handleClick("Emotions")}
          >
            Emotions
          </Link>
        </li>
        <li>
          <Link
            to="/Content"
            className={`p-3 rounded-md ${
              activeLink === "Content" ? "bg-sky-300 text-black" : "bg-white border-sky-700 border-b-2"
            }`}
            onClick={() => handleClick("Content")}
          >
            Content
          </Link>
        </li>
        <li>
          <Link
            to="/Flow"
            className={`p-3 rounded-md ${
              activeLink === "Flow" ? "bg-sky-300 text-black" : "bg-white border-sky-700 border-b-2"
            }`}
            onClick={() => handleClick("Flow")}
          >
            Flow
          </Link>
        </li>
        <li>
          <Link
            to="/Grammar"
            className={`p-3 rounded-md ${
              activeLink === "Grammar" ? "bg-sky-300 text-black" : "bg-white border-sky-700 border-b-2"
            }`}
            onClick={() => handleClick("Grammar")}
          >
            Grammar
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbottom;

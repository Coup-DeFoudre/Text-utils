//rfc is a shortcut for creating a functional component
import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// import Login from "./Login";

export default function Navbar(props) {
  const [text, setText] = useState("Dark Mode");
  const darkmode = () => {
    if (text === "Dark Mode") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = "Text-Utils - Dark Mode";
      setText("Light Mode");
    }
    if (text === "Light Mode") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Text-Utils - Light Mode";
      setText("Dark Mode");
    }
  };
  return (
    <div>
      <div className="navbar flex justify-between items-center px-5 py-2">
        <div>
          <a href="#">
          <h1 className="font-bold text-3xl">{props.title}</h1>
          </a>
         
        </div>
        <div className="flex justify-between list-none space-x-6">
          <a href="#">
          <li className="hover:scale-105 transition duration-300 cursor-pointer hover:font-semibold">
            Home
          </li>
          </a>
          
          {/* <a href="/About"><li className="hover:scale-105 transition duration-300 cursor-pointer hover:font-semibold">
            About
          </li></a> */}
          
          {/* <li className="hover:scale-105 transition duration-300 cursor-pointer hover:font-semibold">
            Donate
          </li> */}
        </div>
        <div className="space-x-3">
          <button
            className=" text-white font-bold rounded max-w-fit "
            onClick={darkmode}
          >
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-slate-200 dark:checked:bg-primary dark:checked:after:bg-blue-500 dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              
            />
          </button>
         {/* <a href="/Login">
          <button className="font-medium bg-green-500 px-5 py-1 rounded-lg  text-white hover:scale-105 transition duration-300">
            Log In
          </button>
          </a> */}

          {/* <button className="font-medium bg-green-500 px-5 py-1 rounded-lg  text-white hover:scale-105 transition duration-300">
            Sign Up
          </button> */}
        </div>
      </div>
    </div>
  );
}

// export function checkmode(){

// if(text)

// }

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Enter Title Here",
};

import React, { useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";
import Control from "./control.png";
import Ed1 from "./ed1.png";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";


const EmployeeDash = (props) => {
  // const location = useLocation();
  // let data = location.state.info;
  // let deptName = data.Dept;
  // console.log(data.Dept);
  const navigate = useNavigate();
  const handleChange = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [open, setOpen] = useState(true);
  return (
    <div className="main">
      <div className="py-5 flex justify-end px-5">
        <button className="btn h-12 w-36 font-bold" onClick={handleChange}>
          Logout
        </button>
      </div>
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20"
          } h-auto duration-300  bg-[#461111] xl:-mt-[5.5rem] relative`}
        >
          <img
            src={Control}
            className={`absolute cursor-pointer border border-yellow-700 -right-4 w-10
           top-9 rounded-full ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex space-x-4 items-center">
            <h1></h1>
            <img src={Ed1} alt="no image" className="h-14 w-14 duration-300" />
            <h1
              className={`text-xl text-yellow-200 font-bold origin-left mt-3 duration-300 ${
                !open && "scale-0"
              }`}
            >
              Employee <br /> Dashboard
            </h1>
          </div>
          <div className="mt-40">
            <ul className="text-white">
              <li className="manLi">
                <BsFillChatLeftTextFill className="cursor-pointer h-10 w-7 ml-4" />
                <h1 className={`${!open && "hidden"} origin-left duration-200`}>
                  Chat with Manager
                </h1>
              </li>
              <li className="manLi mt-10">
                <FaPhoneAlt className="cursor-pointer h-10 w-7 ml-4" />
                <h1 className={`${!open && "hidden"} origin-left duration-200`}>
                  Contact the manager
                </h1>
              </li>
              <li className="manLi mt-10">
                <BiNotepad className="cursor-pointer h-10 w-7 ml-4" />
                <h1 className={`${!open && "hidden"} origin-left duration-200`}>
                  Daily Reporting
                </h1>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
          {/* <h1 className="text-3xl">Welcome to {deptName} Department</h1> */}
          <h1 className="text-3xl">Welcome to Department</h1>
        </div>
        <button className="btn">Get Manager</button>
      </div>
      
    </div>
  );
};

export default EmployeeDash;

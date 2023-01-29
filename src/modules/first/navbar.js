import React from "react";

import Footer from "./footer";
import Login from "../second/login";
import RegEmp from "../second/regEmp";
import RegManager from "../second/regManager";
import LoginManager from '../second/loginMan';
import {
  BrowserRouter,
  Route,
  useNavigate,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import EmployeeDash from "../third/EmployeeDash";
import ManagerDash from "../third/ManagerDash";
import Employees from "../third/Employees";

const Navbar = () => {
  //Getting current user
  const user = localStorage.getItem("token");
  const manager = localStorage.getItem("token2");
  const navigate = useNavigate();
  const reload = () => {
    window.location.reload();
  };

  const menuBtn = document.querySelector("#menu-btn");
  const dropBtn = document.querySelector("#dropdown");

  const handleDrop = () => {
    // console.log(dropBtn.classList);
   
    // if(dropBtn.classList.contains('hidden')){
    //   dropBtn.classList.remove('hidden') 
    //   dropBtn.classList.add('flex')      
    // };
    dropBtn.classList.toggle('hidden')
    dropBtn.classList.toggle('flex')
    // console.log(dropBtn.className);
  };
  return (
    <>
      {/* <BrowserRouter> */}

      <nav className="flex justify-between text-white bg-red-900">
        <span
          className="px-16 cursor-pointer text-yellow-200 font-bold py-4 text-xl"
          onClick={reload}
        >
          ManageEmp
        </span>
        <ul className="flex xl:justify-end xl:space-x-14 xl:px-20 xl:font-bold overflow-y-hidden">
          <li></li>
          <li className="navlinks" onClick={() => navigate("/")}>
            Home
          </li>
          <div>
            <button
              className="navlinks "
              id="menu-btn"
              onClick={handleDrop}
            >
              Services ▼
            </button>
            <div
              className="bg-red-800 hidden flex-col rounded mt-1 p-2 w-28 absolute"
              id="dropdown"
            >
              <a
                href=""
                className="px-2 py-1 hover:bg-orange-300 rounded hover:text-black"
                onClick={() => navigate('/directService2')}
              >
                Task
              </a>
              <a
                href=""
                className="px-2 py-1 hover:bg-orange-300 rounded hover:text-black"
                onClick={() => navigate('/directService')}
              >
                Chat
              </a>
              <a
                href=""
                className="px-2 py-1 hover:bg-orange-300 rounded hover:text-black"
                onClick={() => navigate('/directService')}
              >
                Reporting
              </a>
            </div>
          </div>

          <li className="navlinks">About Us</li>
          <li className="navlinks">Contact</li>
          <li className="navlinks" onClick={() => navigate("/login")}>
            Login
          </li>
        </ul>
      </nav>

      {/* Home Page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logMan" element={<LoginManager />} />
        <Route path="/regemp" element={<RegEmp />} />
        <Route path="/regmanager" element={<RegManager />} />
        {user && <Route path="/empDash" element={<EmployeeDash />} />}
        {/* <Route path="/empDash" element={<EmployeeDash />} /> */}
        <Route path="/manDash" element={<ManagerDash />} />
        <Route path="/emp" element={<Employees/>}/>

        {/* Restricting not registered & logged in person */}
        {!user && <Route path="/directService" element={<Login />}  />}
        {/* {!user && <Route path="/login" element={<RegEmp />} />} */}
        {/* Allowing logged in person */}
        {user && <Route path="/directService" element={<EmployeeDash />} />}
        {!manager && <Route path="/directService2" element={<LoginManager />} />}
        {manager && <Route path="/directService2" element={<ManagerDash />} />}
        
      </Routes>
    </>
  );
};

export default Navbar;

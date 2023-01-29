import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Emp1 from "./emp1.jpg";
import RegEmp from "../second/regEmp";
import Login from "../second/login";
import RegManager from "../second/regManager";

const Home = () => {
  const navigate = useNavigate();
  //   const [isShown,setIsShown] = useState(false);
  //   const[isRegEmp,setIsRegEmp] = useState(false);
  //   const[isRegMan,setIsRegMan] = useState(false);
  return (
    <>
      <div className="main h-[40.8rem]">
        <div className="first">
          <img
            src={Emp1}
            alt="Not Available"
            className="lg:h-[40.8rem] lg:w-[100rem] xl:rounded-b-[25rem] lg:rounded-b-[20rem] md:rounded-b-[15rem] rounded-b-[10rem]"
          />
          <div className="lg:-my-[30rem] md:-my-[25rem] sm:-my-[20rem] -my-[15rem] xl:px-28 lg:px-20 md:px-14 sm:px-6 px-4">
            {/* Here btn is a common class name. Styles are defined in index.css with the help of apply directive */}
            <button className="btn" onClick={() => navigate("/regEmp")}>
              Register as Employee
            </button>
            <p className="font-bold text-red-900 xl: px-10 md:px-14 lg:px-20 text-sm">
              OR
            </p>
            <p
              className="signIn sm:px-6 md:px-10 lg:px-16 px-7"
              onClick={() => navigate("/login")}
            >
              Sign In
            </p>
            {/* <button className="bg-red-900 rounded-full xl:mt-8 h-12 w-44 text-white font-semibold hover:bg-yellow-300 hover:text-black hover:font-semibold active:bg-yellow-400 hover:border-[2px] hover:border-red-900">
              Register as Manager
            </button> */}
            <div className="flex justify-end md:-mt-36 -mt-[4.5rem]">
              <button
                className="btn md:mt-10"
                onClick={() => navigate("/regmanager")}
              >
                Register as Manager
              </button>
            </div>
            <p className="font-bold text-red-900 lg:px-20 md:px-16 sm:px-12 flex justify-end text-sm px-9">
              OR
            </p>
            {/* Here signIn is a common class name. Styles are defined in index.css with the help of apply directive */}
            <p
              className="signIn lg:px-16 md:px-12 sm:px-8 px-6 flex justify-end"
              onClick={() => navigate("/logMan")}
            >
              Sign In
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

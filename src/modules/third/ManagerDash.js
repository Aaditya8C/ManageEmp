import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Control from "./control.png";
import Ed1 from "./ed1.png";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { BiTask } from "react-icons/bi";
import axios from "axios";

const ManagerDash = (props) => {
  // const dept = ["Accounts","Engineering"];
  // const location = useLocation();
  // const managerData = location.state.info;
  // console.log(managerData)
  const [data, setData] = useState([]);
  const [isShown, setIsShown] = useState(true); //For controlling home main screen of manager dashboard

  const navigate = useNavigate();
  const handleChange = () => {
    localStorage.removeItem("token2");
    navigate("/");
  };
  const [open, setOpen] = useState(true);
  const [acc, setAcc] = useState(); //when dept is selected name of dept will be stored in this state variable

  const getData = (e) => {
    axios
      .get("http://localhost:4001/all")
      .then((response) => {
        let info = response.data;
        setData(info);
        console.log("Retrieved data");
        console.log(data); //usestate variable containing data
      })
      .catch((e) => {
        console.log(e);
        console.log("Error retrieving data");
      });
  };

  //For getting users in the particular dept
  const filterData = () => {
    let temp = data;
    temp = temp.filter((item) => {
      if (acc == "Accounts") {
        if (item.Dept === acc) {
          return item;
        }
      }
      if (acc == "Operations") {
        if (item.Dept === acc) {
          return item;
        }
      }
      if (acc == "Maintenace") {
        if (item.Dept === acc) {
          return item;
        }
      }
      if (acc == "Support") {
        if (item.Dept === acc) {
          return item;
        }
      }
      if (acc == "Engineering") {
        if (item.Dept === acc) {
          return item;
        }
      }
      if (acc == "Sales") {
        if (item.Dept === acc) {
          return item;
        }
      }
    });

    return (
      <div className="border-[10px] border-red-900 overflow-y-scroll h-96 px-5 items-center mt-6">
        {temp.map((item, index) => {
          return (
            <div className="border-[5px] border-[#FF4500] flex px-5 items-center h-16 text-xl mt-6 rounded-3xl">
              <h1 key={index}>{item.Username} </h1>
            </div>
          );
        })}
      </div>
    );
  };

  //---------------------------Main Design-------------------------
  return (
    <>
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
            } h-auto duration-300  bg-[#461111] -mt-[5.5rem] relative`}
          >
            <img
              src={Control}
              className={`absolute cursor-pointer border border-yellow-700 -right-4 w-10
           top-9 rounded-full ${!open && "rotate-180"}`}
              onClick={() => setOpen(!open)}
            />
            <div className="flex space-x-4 items-center">
              <h1></h1>
              <img
                src={Ed1}
                alt="no image"
                className="h-14 w-14 duration-300"
              />
              <h1
                className={`text-xl text-yellow-200 font-bold origin-left mt-3 duration-300 ${
                  !open && "scale-0"
                }`}
              >
                Manager <br /> Dashboard
              </h1>
            </div>
            <div className="md:mt-40 mt-28">
              <ul className="text-white">
                <li
                  className="manLi"
                  onClick={() => {
                    // getData();
                    // filterData();
                  }}
                >
                  <BsFillChatLeftTextFill
                    className={`cursor-pointer h-10 w-7 ml-4 ${
                      !open && "ml-6"
                    }`}
                  />
                  <h1
                    className={`${!open && "hidden"} origin-left duration-75`}
                  >
                    Chat with Employees
                  </h1>
                </li>
                <li className="manLi mt-10 ">
                  <FaPhoneAlt
                    className={`cursor-pointer h-10 w-7 ml-4 ${
                      !open && "ml-6"
                    }`}
                  />
                  <h1
                    className={`${!open && "hidden"} origin-left duration-75`}
                  >
                    Contact the Employees
                  </h1>
                </li>
                <li className="manLi mt-10">
                  <BiNotepad
                    className={`cursor-pointer h-10 w-7 ml-4 ${
                      !open && "ml-6"
                    }`}
                  />
                  <h1
                    className={`${!open && "hidden"} origin-left duration-75`}
                  >
                    Daily Reporting
                  </h1>
                </li>
                <li className="manLi mt-10">
                  <BiTask
                    className={`cursor-pointer h-10 w-7 ml-4 ${
                      !open && "ml-6"
                    }`}
                  />
                  <h1
                    className={`${!open && "hidden"} origin-left duration-75`}
                  >
                    Task Distribution
                  </h1>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <button className="btn">Show Departments</button>

            <div className={`${!isShown && "hidden"}`}>
              <div className="md:flex  md:flex-row lg:flex-col h-[28rem] lg:h-[30rem] overflow-y-scroll lg:overflow-hidden">
              <div className="md:m-10 m-7 lg:m-0 flex md:justify-between lg:flex-row flex-col md:space-y-10 space-y-6">
                <div className="dept lg:m-10">
                  <option
                    className="deptOptions"
                    value="Accounts"
                    onClick={(e) => {
                      setIsShown(false);
                      // setIsShown1(true);
                      getData();
                      setAcc(e.target.value);
                    }}
                  >
                    Accounts
                  </option>
                </div>
                <div className="dept">
                  <option
                    className="deptOptions"
                    value="Operations"
                    onClick={(e) => {
                      setIsShown(false);
                      getData();
                      setAcc(e.target.value);
                    }}
                  >
                    Operations
                  </option>
                </div>
                <div className="dept">
                  <option
                    className="deptOptions"
                    value="Maintenance"
                    onClick={(e) => {
                      setIsShown(false);
                      getData();
                      setAcc(e.target.value);
                    }}
                  >
                    Maintenance
                  </option>
                </div>
              </div>
              <div className="md:m-10 m-7 lg:m-0 flex justify-between lg:flex-row flex-col md:space-y-10 space-y-6">
                <div className="dept lg:m-10">
                  <option
                    className="deptOptions"
                    value="Support"
                    onClick={(e) => {
                      setIsShown(false);
                      getData();
                      setAcc(e.target.value);
                    }}
                  >
                    Support
                  </option>
                </div>
                <div className="dept">
                  <option
                    className="deptOptions"
                    value="Engineering"
                    onClick={(e) => {
                      sm: setIsShown(false);
                      getData();
                      setAcc(e.target.value);
                    }}
                  >
                    Engineering
                  </option>
                </div>
                <div className="dept">
                  <option
                    className="deptOptions"
                    value="Sales"
                    onClick={(e) => {
                      setIsShown(false);
                      getData();
                      setAcc(e.target.value);
                    }}
                  >
                    Sales
                  </option>
                </div>
              </div>
              </div>

              {/* Data here */}
            </div>
            {/* <div className={`${isShown2 ? "visible" : "hidden"} overflow-scroll h-[30rem]`}> */}
            <div className={`${isShown && "hidden"} h-[30rem]`}>
              <h1>Hello</h1>

              {filterData()}
            </div>

            {/* <h1 className="text-3xl">Welcome to the Manager dashboard....</h1> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerDash;

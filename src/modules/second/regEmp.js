import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import EmployeeDash from "../third/EmployeeDash";
import Login from "./login";

const RegEmployee = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    Username: "",
    Email: "",
    Password: "",
    OfficeCode: "",
    EmpId: "",
    Dept: "",
    Job: "",
    Mobile: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const toLogin = () => {
    navigate("/login", { state: { info: data } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4001/api/register";
      const { data: res } = await axios.post(url, data);
      toLogin();
      // navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (error.response && error.response >= 400 && error.response < 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="h-[100vh] w-[100%] flex justify-center items-center">
        <div className="logRegBox h-[30rem] w-[40rem]">
          {/* <div className=" flex  justify-end -mt-9 -mr-[5.5rem]">
          <button className="close" onClick={() => props.setTrigger(false)}>
            X
          </button>
        </div> */}
          <h1 className="text-red-900 font-bold xl:text-2xl flex justify-center">
            Register as Employee
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="Username"
              value={data.Username}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-12 px-4"
            />

            {/* <MdEmail className=""/> */}
            <input
              type="email"
              placeholder="Email Id"
              name="Email"
              value={data.Email}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 ml-5 px-4"
            />
            <input
              type="password"
              placeholder="Password"
              name="Password"
              value={data.Password}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 px-4"
            />
            <input
              type="number"
              placeholder="Office Code"
              name="OfficeCode"
              value={data.OfficeCode}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 ml-5 px-4"
            />
            <input
              type="number"
              placeholder="Employee Id"
              name="EmpId"
              value={data.EmpId}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 px-4"
            />
            <input
              type="text"
              placeholder="Department"
              name="Dept"
              value={data.Dept}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 ml-5 px-4"
            />
            <input
              type="text"
              placeholder="Job Profession"
              name="Job"
              value={data.Job}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 px-4"
            />
            <input
              type="number"
              placeholder="Mobile No"
              name="Mobile"
              value={data.Mobile}
              onChange={handleChange}
              required
              className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 ml-5 px-4"
            />
            {error && alert({ error })}
            <div className="flex justify-center">
              <button
                type="submit"
                className="logReg"
                // onClick={() => navigate("/login")}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <Login info={data} /> */}
    </>
  );
};

export default RegEmployee;

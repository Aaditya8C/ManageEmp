import axios from "axios";
import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const LoginMan = (props) => {
  // const location = useLocation();
  // let regManData = location.state.info;
  // console.log(regManData);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };


  // const toManDash = () => {
  //   navigate("/manDash", { state: { info: regManData } });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4001/api/logManager";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token2", res.data);
      alert("Redirecting you to the manager dashboard....")
      // toManDash();
      navigate("/manDash");
    } catch (error) {
      alert("Enter correct Email & Password")
      if (error.response && error.response >= 400 && error.response < 500) {
        setError(error.response.data.message);
        
      }
    }
  };
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <div className="logRegBox h-[25rem] w-[25rem]">
        <h1 className="text-red-900 font-bold text-xl py-5">
          Login as Manager
        </h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Id"
            name="Email"
            value={data.Email}
            onChange={handleChange}
            required
            className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-7 px-4"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={data.Password}
            onChange={handleChange}
            required
            className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-2 px-4"
          />
          {error && <div>{error}</div>}
          <button className="logReg">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginMan;

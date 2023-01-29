import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegManager = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    Username: "",
    Email: "",
    Password: "",
    OfficeCode: "",
    Mobile: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const toLogin = () => {
    navigate("/logMan", { state: { info: data } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = "http://localhost:4001/api/regManager";
      const { data: res } = await axios.post(url, data);
      // navigate("/logMan");
      toLogin();
      console.log(res.message);
      
    } catch (error) {
      if (error.response && error.response >= 400 && error.response < 500) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="logRegBox h-[33rem] w-[25rem]">
        {/* <div className=" flex  justify-end -mt-9 -mr-[5.5rem]">
          <button className="close" onClick={() => props.setTrigger(false)}>
            X
          </button>
        </div> */}
        <h1 className="text-red-900 font-bold text-xl">Register as Manager</h1>
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

          <input
            type="email"
            placeholder="Email Id"
            name="Email"
            value={data.Email}
            onChange={handleChange}
            required
            className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 px-4"
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
            className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 px-4"
          />
          <input
            type="number"
            placeholder="Mobile No"
            name="Mobile"
            value={data.Mobile}
            onChange={handleChange}
            required
            className="border-[3px] rounded-tr-xl rounded-bl-xl h-10 w-52 mt-5 px-4"
          />
          {error && <div>{error}</div>}
          <button className="logReg">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegManager;

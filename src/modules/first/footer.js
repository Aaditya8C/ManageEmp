import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-red-900  flex md:justify-around flex-col md:flex-row lg:h-96 h-[55rem] space-y-10 lg:-ml-20 sm:space-x-10 space-x-5">
      <div></div>

      <div className="f1 w-96 md:ml-20 xl:ml-1">
        <span className="text-yellow-200 font-semibold lg:text-xl cursor-pointer">
          ManageEmp
        </span>
        <p className="text-white text-lg mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti,
          maxime iure iusto velit amet aliquam reprehenderit voluptatibus,
          repellendus ea quos cum eos officiis. Similique exercitationem
          inventore amet autem, eum laudantium.
        </p>
      </div>

      <div className="f2">
        <h1 className="lg:text-xl uppercase font-semibold text-yellow-200">
          Services
        </h1>
        <ul className="text-white mt-5 space-y-2 text-lg ">
          <li className="cursor-pointer hover:text-orange-300">
            Task Distribution
          </li>
          <li className="cursor-pointer hover:text-orange-300">
            Interactive Chat
          </li>
          <li className="cursor-pointer hover:text-orange-300">
            Work Monitoring
          </li>
          <li className="cursor-pointer hover:text-orange-300">
            Daily Reporting
          </li>
        </ul>
      </div>

      <div className="f3">
        <h1 className="lg:text-xl font-semibold uppercase text-yellow-200">
          Follow Us
        </h1>

        <div className="flex space-y-5">
          <div></div>
          <div className="flex md:space-x-6 lg:space-y-4 mt-1 md:flex-col md:space-y-3">
            <a href=""></a>
            <a href="#" className="text-white text-2xl hover:text-orange-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-white text-2xl hover:text-orange-300 ml-6">
              <FaFacebook />
            </a>
          </div>

          <div className="flex space-x-6 lg:space-y-4 md:flex-col md:space-y-3">
            <a href=""></a>
            <a href="#" className="text-white text-2xl hover:text-orange-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-white text-2xl hover:text-orange-300">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      
      <div className="f4 md:mr-6">
        <h1 className="lg:text-xl uppercase text-yellow-200 font-semibold">
          Legal
        </h1>
        <ul className="text-white text-lg mt-5 space-y-2">
          <li className="cursor-pointer hover:text-orange-300">
            Privacy Policy
          </li>
          <li className="cursor-pointer hover:text-orange-300">Licensing</li>
          <li className="cursor-pointer hover:text-orange-300">
            Terms & Conditions
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

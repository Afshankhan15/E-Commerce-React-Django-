import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import SignIn from "../Pages/SignIn";
const Navbar = ({ buttonText, buttonNavigation }) => {
  const navigate = useNavigate();
  const List = ["Home", "About", "Pricing", "Contact Us"];

  const [islist, setIsList] = useState(false);
  const showList = () => {
    setIsList(!islist);
    console.log("status", islist);
  };

  // const loginPage = () => {
  //   navigate('/sign')
  // }
  const handleButton = () => {
    navigate(buttonNavigation);
  };

  return (
    <div className="w-full max-w-full mb-16 bg-gray-700 text-white">
      <div className="flex justify-between py-4 px-4 max-w-4xl xl:max-w-5xl mx-auto">
        <div class="flex items-center space-x-2">
          <h2 class=" dark:text-white font-bold text-2xl">
            Onelab <span className=" text-[#3498eb]">Ventures</span>
          </h2>
        </div>
        <p onClick={showList} className="text-xl lg:hidden cursor-pointer">
          <FontAwesomeIcon icon={faList} />
        </p>

        {/* <ul className='hidden md:flex justify-center items-center'> */}
        <ul className="hidden lg:flex items-center space-x-10 text-base font-bold">
          {List.map((item, idx) => (
            <li
              key={idx}
              className="cursor-pointer hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
            >
              {item}
            </li>
          ))}
        </ul>

        {islist && (
          <div className="lg:hidden fixed top-0 left-0 md:w-[40%] sm:w-[50%] xs:w-[60%] w-[100%] h-full px-4 py-4 bg-gray-700 ease-in-out duration-300">
            <div class="flex items-center justify-between mb-6">
              <h2 class=" dark:text-white font-bold text-2xl">
                Onelab <span className=" text-[#3498eb]">Ventures</span>
              </h2>
              <p
                onClick={() => setIsList(!islist)}
                className="text-2xl font-medium hover:text-slate-300 cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark} />
              </p>
            </div>
            <ul className="space-y-6 uppercase p-4">
              {List.map((item, idx) => (
                <li
                  key={idx}
                  className="text-white hover:text-slate-300 cursor-pointer border-b border-gray-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* <p className='bg-blue-500 text-white text-sm flex justify-center items-center px-3 border rounded-lg'>Login</p> */}
        <button
          // onClick={loginPage}
          onClick={handleButton}
          class="hidden lg:flex items-center justify-center rounded-md bg-[#3498eb] text-white px-6 py-2 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

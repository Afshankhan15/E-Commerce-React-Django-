import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginUser = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/loginUser/', {
        email : email,
        password : password
      })
      console.log(res)
      if(res.status === 200) {
        localStorage.setItem("access_token", res.data.access_token)
        localStorage.setItem("refresh_token", res.data.refresh_token)
        toast.success('Login Successfully');
        setTimeout(() => {
          navigate('/product')
        }, 2000);
      }
      else {
        // Handle unexpected response statuses
        console.warn('Unexpected response status:', res.status);
        alert("Login failed: Unexpected response status");
    }
    } catch (error) {
      console.error('Error logging in:', error);
    }

  }




  return (
    <div className="w-full">
      {/* Login Form - 1 */}
      <div className="flex flex-col mx-4 phone:mx-auto xs:mx-auto my-4 md:mt-12 sm:mx-auto p-6 max-w-[380px] px-8 border rounded-lg shadow-xl bg-white">
        {/* div 1 */}
        <div className="flex flex-col gap-5 items-center mt-6">
          <h1 className="font-bold text-2xl">Sign Up</h1>
          <button className="w-full flex items-center justify-center gap-4 border rounded-lg py-3 bg-indigo-100 hover:bg-indigo-200">
            <img
              className="h-7 w-7 object-cover rounded-full"
              src="data:image/png;base64,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"
              alt=""
            />
            <p className="font-bold text-gray-800">Sign Up with Google</p>
          </button>
          <button className="w-full flex items-center justify-center gap-4 border rounded-lg py-3 bg-indigo-100 hover:bg-indigo-200">
            <img
              className="h-7 w-7 object-cover rounded-full"
              src="data:image/png;base64,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"
              alt=""
            />
            <p className="font-bold text-gray-800">Sign Up with GitHub</p>
          </button>
        </div>

        <div className="text-center border-b-2 my-12">
          <p
            className="inline-block tracking-wide bg-white translate-y-1/2"
            // className="leading-none px-2 inline-block tracking-wide transform translate-y-1/2"
          >
            or sign up with e-mail
          </p>
        </div>

        {/* Input Div */}
        <div className="flex flex-col gap-4 mt-10">
          <input
            className="px-8 py-4 border border-gray-200 rounded-lg bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="px-8 py-4 border border-gray-200 rounded-lg bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button onClick={loginUser} className="mt-3 py-4 tracking-wide font-semibold bg-indigo-500 text-gray-100 border rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out">
            Sign Up
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Navbar"
const Product = () => {
  const navigate = useNavigate()
  const Shoes = [
    {
      name: "Sole Elegance",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "25",
      imageSrc: "https://readymadeui.com/images/product9.webp",
    },
    {
      name: "Nike",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "28",
      imageSrc: "https://readymadeui.com/images/product10.webp",
    },
    {
      name: "Adidas",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "32",
      imageSrc: "https://readymadeui.com/images/product11.webp",
    },
    {
      name: "Puma",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "78",
      imageSrc: "https://readymadeui.com/images/product12.webp",
    },
    {
      name: "Campus",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "56",
      imageSrc: "https://readymadeui.com/images/product13.webp",
    },
    {
      name: "sparX",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: "89",
      imageSrc: "https://readymadeui.com/images/product14.webp",
    },
  ];

  
  

  const addProduct = async (name, price, ImageUrl) => {
    const token = localStorage.getItem("access_token");
    console.log(token);
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/add_product/",
        {
          name: name,
          price: price,
          image_url : ImageUrl
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res.status === 201) {
        toast.success(`product added successfully`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <>
    <Navbar buttonText='Get Product' buttonNavigation='/getProduct'/>
    <div className="w-full mt-16 mb-16">
    <ToastContainer />
      <h2 className="text-3xl font-bold text-center">Featured Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 place-content-center max-w-7xl mx-auto px-8 py-4">
        {/* card div */}
        {Shoes.map((element, idx) => (
          <div
            key={idx}
            className="flex flex-col mx-auto border rounded-lg shadow-lg max-w-[320px] hover:bg-gray-200  transition duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* div - 1 */}
            <div className="bg-slate-100 py-4 px-4">
              <img
                className="w-64 h-52 object-contain"
                // src="https://readymadeui.com/images/product9.webp" />
                src={element.imageSrc}
              />
            </div>
            {/* div - 2 */}
            <div className="flex flex-col gap-3 mt-4 px-4 py-1">
              <h3 class="text-lg font-extrabold text-gray-800">
                {element.name}
              </h3>
              <p class="text-gray-600 text-sm">{element.desc}</p>
              <h4 class="text-lg text-gray-800 font-bold">$ {element.price}</h4>
              <button
                onClick={() => addProduct(element.name, element.price, element.imageSrc)}
                className="bg-blue-500 text-white py-2 border rounded-lg w-[60%] mx-auto my-2"
              >
                Buy 
              </button>
             
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex w-full">
      <button onClick={() => navigate('/getProduct')} className="bg-green-500 text-white py-4 px-4 border mx-auto rounded-lg my-6 w-[240px] text-lg font-bold">Get Product</button>
      </div> */}
    </div>
    </>
  );
};

export default Product;

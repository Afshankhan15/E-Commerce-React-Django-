import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Navbar";
const GetProduct = () => {
    const navigate = useNavigate()
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState()

  const token = localStorage.getItem("access_token");
  console.log(token);

  const GetProduct = async () => {
    try {
      // const res = await axios.get("http://127.0.0.1:8000/api/get_product/", {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const res = await axios.post(
        "http://127.0.0.1:8000/api/get_product/",
        {
          name: search,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        setProductList(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetProduct();
    console.log("PRODUCTS", productList);
  }, []);

  useEffect(() => {
    GetProduct();
    console.log("PRODUCTS", productList);
  }, [search]);


  const deleteProduct = async (id) => {
    console.log("ID: ", id)
    const res = await axios.delete(`http://127.0.0.1:8000/api/delete_product/${id}/`, {
        headers: {
            Authorization: `Bearer ${token}`,
          },
    })

    console.log(res)
    if(res.status === 200) {
        // alert(`${id} deleted successfully`)
        toast.success(`product ${id} deleted successfully`);
    }
  }

  // Logout
  const LogoutUser = async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    toast.success('Logout Successfully');
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }


  return (
   <>
    <Navbar buttonText='Buy Product' buttonNavigation='/product' />
   <div className="w-full h-auto -mt-12 mb-16">
      {console.log("pro2 :", productList)}
     <div className="flex gap-4 justify-center sm:justify-end w-full mb-2 bg-yellow-300">
      <input  className="border rounded-md px-4 py-2 outline-none" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {console.log("search:", search)}
     <button onClick={LogoutUser} className="border rounded-lg px-4 py-2 bg-gray-700 text-slate-100 font-bold">Logout</button>
     <ToastContainer />
     </div>
      <h2 className="text-3xl font-bold text-center">My Product's</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 place-content-center max-w-7xl mx-auto px-8 py-4 mt-6">
        {/* card div */}
        {
            productList.map((Element, idx) => (
                <div key={idx} className="flex flex-col mx-auto border rounded-lg shadow-lg max-w-[320px] hover:bg-gray-200  transition duration-300 hover:-translate-y-2 cursor-pointer">
          {/* div - 1 */}
          <div className="bg-slate-100 py-4 px-4">
            <img
              className="w-64 h-52 object-contain"
              // src="https://readymadeui.com/images/product9.webp"
              src={Element.image_url}
            />

            {/* /> */}
          </div>
          {/* div - 2 */}
          <div className="flex flex-col gap-3 mt-4 px-4 py-1">
            <h3 class="text-lg font-extrabold text-gray-800">
              {Element.name}
            </h3>
            <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <h4 class="text-lg text-gray-800 font-bold">$ {Element.price}</h4>
            <button
            onClick={() => deleteProduct(Element.id)}
            className="bg-red-700 text-white py-2 border rounded-lg w-[60%] mx-auto my-2">
              Delete
            </button>
          </div>
        </div>
            ))
        }
      </div>
    </div>
   
   </>
  );
};

export default GetProduct;

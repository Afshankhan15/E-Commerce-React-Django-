import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
  const [name, setName] = useState(null)
  const [price, setPrice] = useState(null)
  const ACCESS_TOKEN = localStorage.getItem('access_token')
  const addProduct = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/add_product/', {
       product_name : name,
       product_price : price
      },
      {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`
        }
      }
    
    )
      console.log(res.data)
      if(res.status == 201) {
        alert('Product Added Successfully')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      Product Name : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      Product Price : <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default Home
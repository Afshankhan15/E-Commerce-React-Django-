import React, { useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const LoginUser = async () => {
        const res = await axios.post("http://127.0.0.1:8000/api/loginUser/", 
            {
                username: username,
                password: password
            }
        )
        localStorage.setItem("access_token", res.data.access_token)
        localStorage.setItem("refresh_token", res.data.refresh_token)
        if (res.status === 200) {
            alert("login")
            navigate("/home")
        } else alert ("login failed")
    }
  return (
    <div>
        <h1>Login</h1>
        username : <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        password : <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={LoginUser}>Login</button>
    </div>
  )
}

export default Login
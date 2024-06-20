import React, { useState, useEffect} from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

function Protected ({children}) {

    const navigate = useNavigate()
    const [authorized, setAuthorized] = useState(null)
    useEffect(() => {
        checkAuth().catch(() => setAuthorized(false))
    }, [])

    // useEffect(() => {
    //     checkAuth();
    //     const intervalId = setInterval(() => {
    //         checkAuth();
    //     }, 60000); // Check token expiration every minute

    //     return () => clearInterval(intervalId); // Cleanup interval on component unmount
    // }, []);

    const refreshToken = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/token/refresh/', 
            {
                refresh: localStorage.getItem('refresh_token')
                
            }
        )
        console.log("refresh api", res.data)
        if (res.status == 200) {
            // localStorage.setItem('access_token', res.data.access)
            localStorage.setItem("access_token", res.data.access)
            setAuthorized(true)
        } else {
            setAuthorized(false)
        }
        } catch (error) {
            console.log(error)
            setAuthorized(false)
        }

    }
    const checkAuth = async () => {
        const ACCESS_TOKEN = localStorage.getItem('access_token')
        if(!ACCESS_TOKEN) {
            setAuthorized(false)
            return;
        }
        const decodeToken = jwtDecode(ACCESS_TOKEN)
        const tokenExpiration = decodeToken.exp
        console.log("expiration", tokenExpiration)
        const now = Date.now() / 1000 ; // divide by 1000 to get date in seconds

        if(tokenExpiration < now) {
            // setAuthorized(false);
            await refreshToken();
            console.log("called refresh token")
        } else {
            setAuthorized(true);
        }
    }

    if (authorized === null) {
        return <div>Loading...</div>;
    }

    return authorized ? children : navigate('/sign')


}

export default Protected
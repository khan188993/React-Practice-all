import React from 'react'
import { useLocation } from 'react-router-dom'

const Login = () => {
    // console.log(useLocation());
    const Location = useLocation();
    return (
        <>
         <h1>Login Page</h1>   
         {/* <h1>{Location.state && Location.state.st}</h1> */}
         {Location.state && <h2>{Location.state.st}</h2>}
        </>
    )
}

export default Login

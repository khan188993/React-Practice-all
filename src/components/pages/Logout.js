import React from 'react'
import { useLocation } from 'react-router-dom'

const Logout = () => {
    // console.log(useLocation());
    const Location = useLocation();
    return (
        <>
         <h1>Logout Page</h1>   
         {Location.state && <h1>{Location.state.name}</h1>}
        </>
    )
}

export default Logout

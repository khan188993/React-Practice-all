import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  // console.log(useLocation());
  const Location = useLocation();
  const Navigate = useNavigate();
  const data = {
      name:"arfan khan"
  }
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={() => {
          Navigate('/logout',{state:data}) //button click e navitor 
      }}>Log Out</button>
      {/* <h1>{Location.state && Location.state.st}</h1> */}
      {Location.state && <h2>{Location.state.st}</h2>}
    </>
  );
};

export default Login;

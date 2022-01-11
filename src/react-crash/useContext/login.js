import React, { useContext } from "react";
import { AppContext } from "./useContext";

const Login = () => {
  const { setUser } = useContext(AppContext);
  const onChange = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={onChange} />
    </>
  );
};

export default Login;

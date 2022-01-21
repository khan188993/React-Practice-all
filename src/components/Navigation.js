import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" style={({isActive})=>{return {background:isActive?"red":""}}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({isActive})=>{return {background:isActive?"red":""}}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={({isActive})=>{return {background:isActive?"red":""}}}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/post" style={({isActive})=>{return {background:isActive?"red":""}}}>Post</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/" style={({isActive})=>{return {color:isActive?"red":""}}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" style={({isActive})=>{return {color:isActive?"red":""}}}>About</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" style={({isActive})=>{return {color:isActive?"red":""}}}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/login" style={({isActive})=>{return {color:isActive?"red":""}}}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/logout" style={({isActive})=>{return {color:isActive?"red":""}}}>Logout</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={({isActive})=>{return {color:isActive?"red":""}}}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/post" style={({isActive})=>{return {color:isActive?"red":""}}}>Post</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;

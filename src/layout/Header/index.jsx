import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
    };


    return <>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
        <NavLink to='songs' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Search</NavLink>
        <NavLink to='about' style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink> <br/><br/>
        <Outlet/> 
        
    </>

}

export default Header;

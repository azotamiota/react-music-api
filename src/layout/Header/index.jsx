import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
    };


    return <>
        <header>
            <NavLink className='nav-link' to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
            <NavLink className='nav-link' to='songs' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Search</NavLink>
            <NavLink className='nav-link' to='about' style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
        </header>
            <Outlet/> 
        
    </>

}

export default Header;

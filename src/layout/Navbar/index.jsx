import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import './style.css'

const Navbar = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    return <>
        <header>

            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <NavLink className="nav-link" to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="songs" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Search</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="favourites" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Favourites</NavLink>
                    </li>
                </ul>
                <div className="buttons">
                    <NavLink className="btn btn-secondary button" to="register" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Sign up</NavLink>
                    <NavLink className="btn btn-secondary button" to="login" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Login</NavLink>
                </div>
            </nav>


            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to='/' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='songs' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Search</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='about' style={({ isActive }) => (isActive ? activeStyle : undefined)}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='favourites' style={({ isActive }) => (isActive ? activeStyle : undefined)}>Favourites</NavLink>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </header>
            <Outlet/> 
        
    </>

}

export default Navbar;

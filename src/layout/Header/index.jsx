import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {

    let activeStyle = {
        textDecoration: "underline",
    };

    return <>
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
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

                    </ul>
                </div>
            </nav>

        </header>
            <Outlet/> 
        
    </>

}

export default Header;

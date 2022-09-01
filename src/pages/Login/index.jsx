import React from "react";

import './style.css'

const Login = () => {


    return <>
    
    <div className="popup" id="myForm">
        <form action="/action_page.php" className="form-container">
            <h2>Login</h2>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" className="btn btn-secondary">Login</button>
        </form>
    </div>
       
    </>
}

export default Login;

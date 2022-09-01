import React from "react";

import '../Login/style.css'

const Register = () => {
    return <>
    
    <div className="popup" id="myForm">
        <form action="/action_page.php" className="form-container">
            <h2>Register</h2>

            <label for="email"><b>New Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label for="psw"><b>New Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <label for="psw"><b>Re-enter Password</b></label>
            <input type="password" placeholder="Re-enter Password" name="re-psw" required />

            <button type="submit" className="btn btn-secondary">Login</button>
        </form>
    </div>
       
    </>
}

export default Register;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/LogInForm.css'

const LoginForm = () => {
    return (
        <form>
            <div className="form-container">
                <h1>Login</h1>
                <p>Please fill in this form to login.</p>
                <hr/>

                <label for="email"><b>Email</b></label> <br />
                <input type="text" placeholder="Enter Email" name="email" id="email" required/> <br />

                <label for="psw"><b>Password</b></label> <br />
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                <hr/>

                <button type="submit" className="registerbtn">Login</button>
            </div>

            <div className="form-container signin">
                <p>Do not have an account? <a href="#">Register</a>.</p>
            </div>
        </form>
    );
};

export default LoginForm;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/LogInForm.css'

const SignUpForm = () => {
    return (
        <form>
            <div className="form-container">
                <h1>Register</h1>
                <p>Please fill in this form to register.</p>
                <hr/>

                <label for="email"><b>Email</b></label> <br />
                <input type="text" placeholder="Enter Email" name="email" id="email" required/> <br />

                <label for="psw"><b>Password</b></label> <br />
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                <hr/>

                <button type="submit" className="registerbtn">Register</button>
            </div>

            <div className="form-container signin">
                <p>Already have an account? <a href="#">Login</a>.</p>
            </div>
        </form>
    );
};

export default SignUpForm;

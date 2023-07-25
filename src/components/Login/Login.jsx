import { useNavigate } from 'react-router-dom';
import "./Login.css";
import React, { useState } from "react";
import validator from 'validator';
function Login() {
    const getEmail = localStorage.getItem("email");
    const getPassword = localStorage.getItem("password");

    // initialise
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLoginEmail = (e) => {
        setLoginEmail(e.target.value);
    };

    const handleLoginPassword = (e) => {
        setLoginPassword(e.target.value);
    }
    /*
    const [emailError, setEmailError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Is Strong Password')
        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }
    */
    const navigate = useNavigate();
    // const handleRoute = () => {
    //     navigate('/home');
    // }
    const handleSignup = () => {
        navigate('/signup')
    }
   
     const handleLogin = () => {
        const emailRes = JSON.stringify(loginEmail);
        const passRes = JSON.stringify(loginPassword);
        if(emailRes === getEmail && passRes === getPassword) {
            navigate("/home")
        }
     }

    return (
        <div className='container'>
            <div className='login-form'>
                <h3 style={{
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    paddingBottom: "40px",
                    color: "ThreeDDarkShadow",
                    textDecoration: "underline"
                }}>Login</h3>

                <form>
                    <label style={{ marginLeft: "30px" }}>Email </label>
                    <input style={{ marginLeft: "20px" }} type="text" id="userEmail"
                        onChange={handleLoginEmail} /><br />
                    {/* <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{emailError}</span><br /> */}
                    <label style={{ marginLeft: "10px" }}>Password </label>
                    <input type="password" style={{ marginLeft: "10px" }}
                        onChange={handleLoginPassword} /><br />
                    {/* {errorMessage === '' ? null :
                        <span style={{
                            fontWeight: 'bold',
                            color: 'red',
                        }}>{errorMessage}</span>} */}
                    <div className='login-btn' style={{
                        textAlign: "center"
                    }}>{
                        <button type="submit" style={{
                            fontFamily: "sans-serif",
                            paddingTop: "20px"
                        }} onClick={handleLogin}>SignIn</button>}
                    </div>
                </form>
                <p style={{ marginTop: "10px" }}>(or)</p>
                <div className='register'>
                    <button type='submit' style={{
                        fontFamily: "sans-serif", marginTop: "10px"
                    }} onClick={handleSignup}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
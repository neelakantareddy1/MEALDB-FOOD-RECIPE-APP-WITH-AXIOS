import { useNavigate } from 'react-router-dom';
import "./signup.css";
import { useState } from 'react';
function SignUp() {
    // Initialize 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // set name
    const handleName = (e) => {
        setName(e.target.value);
        localStorage.setItem('name', JSON.stringify(name));
    }

    // set email 
    const handleEmail = (e) => {
        setEmail(e.target.value);
        localStorage.setItem('email', JSON.stringify(email));
    }

    // set password 
    const handlePassword = (e) => {
        setPassword(e.target.value);
        localStorage.setItem('password', JSON.stringify(password));
    }
    
    // Navigation after clicking on signup button
    const navigate = useNavigate();
    const reroute = () => {
        navigate("/")
    }
    return (
            <div className='signUp-form' >
                <h3 style={{
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    paddingTop : "20px",
                    paddingBottom:"20px",
                    textDecoration: "underline"
                }}>Register</h3>
                <form>
                    <label>Name </label>
                    <input style={{marginLeft:"90px"}} onChange = {handleName} type='text' /><br />
                    <label>Email </label>
                    <input style={{marginLeft:"95px"}} onChange = {handleEmail} type='text' /><br />
                    <label>Password </label>
                    <input style={{marginLeft:"65px"}} onChange = {handlePassword} type='password' /><br />
                    <label>confirm Password </label>
                    <input style={{marginLeft:"10px"}} type='password' /><br />
                    <div className='btn' style={{
                        textAlign: "center"
                    }}>
                        <button type='submit' style={{
                             fontFamily: "sans-serif",
                             paddingTop : "20px",
                             paddingBottom:"20px"
                        }} onClick={reroute}>SIGN UP</button>
                    </div>
                </form>
            </div>
    )
}

export default SignUp;
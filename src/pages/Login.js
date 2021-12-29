import React, { useState } from 'react';
import Bg1 from "../assets/Group 43.svg";
import Bg2 from "../assets/Group 45.svg";
import Logo from "../assets/Full-logo.svg";
import EditIcon from "../assets/edit-filled.svg";
import Input from "../components/Input" ;
import { DisabledButton, PrimaryButton } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    const [showPasswordPage, setshowPasswordPage] = useState(false)
    const [disableBtn, setdisableBtn] = useState(true)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [emailErr, setemailErr] = useState("");

    const handleEmailChange = (e)=>{
        setEmail(e.target.value)
        document.getElementById("email").style.border="1px solid #DFE1E6";
        document.getElementById("error-email").style.display="none"
        if(document.getElementById("email").checkValidity() === true){
            setdisableBtn(false);
            document.getElementById("check-mark").style.visibility="visible"

        } else{
            setdisableBtn(true)
            document.getElementById("check-mark").style.visibility="hidden"
        }
    }

    const showErrors = () =>{
        if(email==="" || email===" "){
            document.getElementById("email").style.border="1px solid #DE350B";
            document.getElementById("error-email").style.display="block"
            setemailErr("Enter email")
        } else if(document.getElementById("email").checkValidity() === false){
            document.getElementById("email").style.border="1px solid #DE350B";
            document.getElementById("error-email").style.display="block"
            setemailErr("Enter valid email")
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        document.getElementById("password").style.border="1px solid #DFE1E6";
        document.getElementById("error-password").style.display="none"
    }

    const handleEnterPassword = ()=>{
        setshowPasswordPage(true)
        document.getElementById("check-mark").style.visibility="hidden"
    }

    const handleLogin = () => {
        if(password==="" || password ===" "){
            document.getElementById("password").style.border="1px solid #DE350B";
            document.getElementById("error-password").style.display="block";
            setPasswordErr("Enter password")
        } else if(document.getElementById("password").checkValidity()=== false) {
            document.getElementById("password").style.border="1px solid #DE350B";
            document.getElementById("error-password").style.display="block";
            setPasswordErr("Password must be up to 6 characters")
        } else{
            const user={
                email: email,
                password: password,
                role:1,
            }
            localStorage.setItem("loggedUserDetails",JSON.stringify(user))
            navigate("/dashboard")
        }
    }
    return (
        <main className='login'>
            <img src={Bg1} alt="background" className='bg-5'/>
            <img src={Bg2} alt="background" className='bg-6'/>
            
            <div className='logo-section'>
                <img src={Logo} alt="logo" />
            </div>

            <section className='login-form'>
                <p className='form-title'>Log in </p>
                <p className='form-subtitle'>Access your resource edge account</p>
                {showPasswordPage ? (<div className='user-email'>
                   <div >
                        <p className='full-name'>{email}</p>
                        <p className='email-add'>{email}</p>
                    </div> 
                    &nbsp;
                    <div>
                        <img src={EditIcon} alt="edit-icon"/>
                    </div>
                </div>) : null}
                
                
                {showPasswordPage ? (<Input 
                    id="password"
                    label="Password"
                    placeholder="Enter password"
                    type="password"
                    handleChange={handlePasswordChange}
                    value={password}
                    min="6"
                    error={passwordErr}
                />) :(<Input 
                    id="email"
                    label="Email Address"
                    placeholder="Enter email"
                    type="email"
                    handleChange={handleEmailChange}
                    value={email}
                    error={emailErr}
                />)}
                
                {disableBtn ? (<DisabledButton
                    text="Next"
                    handleClick={showErrors}
                />) : (<PrimaryButton
                    text="Next"
                    handleClick={showPasswordPage? handleLogin : handleEnterPassword}
                />)}
                
                
                <p className='forgot-text'><Link to="/reset-password">Forgot password?</Link></p>



            </section>
            
        </main>
    )
}

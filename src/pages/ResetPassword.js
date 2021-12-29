import React, { useState } from 'react';
import Bg1 from "../assets/Group 43.svg";
import Bg2 from "../assets/Group 45.svg";
import Logo from "../assets/Full-logo.svg";
import Input from "../components/Input" ;
import { PrimaryButton } from '../components/Button';
import ConfirmIcon from "../assets/check-circle-outline.svg";
import { Link } from 'react-router-dom';

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [cpasswordErr, setCPasswordErr] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [resetEmail, setResetEmail] = useState("");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showPConfirmation, setShowPConfirmation] = useState(false);
    const [showResetPage, setShowResetPage] = useState(false);

    const handleEmailChange = (e)=>{
        setResetEmail(e.target.value)
        document.getElementById("reset-email").style.border="1px solid #DFE1E6";
        document.getElementById("error-reset-email").style.display="none"
        if(document.getElementById("reset-email").checkValidity() === true){
            document.getElementById("check-mark").style.visibility="visible"

        } else{
            document.getElementById("check-mark").style.visibility="hidden"
        }
    }

    const handleShowConfirmation = () =>{
        if(resetEmail==="" || resetEmail===" "){
            document.getElementById("reset-email").style.border="1px solid #DE350B";
            document.getElementById("error-reset-email").style.display="block"
            setEmailErr("Enter email")
        } else if(document.getElementById("reset-email").checkValidity() === false){
            document.getElementById("reset-email").style.border="1px solid #DE350B";
            document.getElementById("error-reset-email").style.display="block"
            setEmailErr("Enter valid email")
        } else{
            setShowConfirmation(true);
            setTimeout(() => {
                setShowResetPage(true)
            }, 3000);
        }
        
    }

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value)
        document.getElementById("new-password").style.border="1px solid #DFE1E6";
        document.getElementById("error-new-password").style.display="none"
    }

    const handleCPasswordChange = (e) => {
        setCPassword(e.target.value)
        document.getElementById("cpassword").style.border="1px solid #DFE1E6";
        document.getElementById("error-cpassword").style.display="none"
    }

    const handleShowPasswordConfirmation = () => {
        if(newPassword==="" || newPassword===" " ){
            document.getElementById("new-password").style.border="1px solid #DE350B";
            document.getElementById("error-new-password").style.display="block";
            setPasswordErr("Enter password")
        } else if (document.getElementById("new-password").checkValidity() === false){
            document.getElementById("new-password").style.border="1px solid #DE350B";
            document.getElementById("error-new-password").style.display="block";
            setPasswordErr("Password must be up to 6 characters")
        } else if(cPassword ==="" || cPassword ===" " ){
            document.getElementById("cpassword").style.border="1px solid #DE350B";
            document.getElementById("error-cpassword").style.display="block";
            setCPasswordErr("Re-enter password")
        } else if(document.getElementById("cpassword").checkValidity() === false){
            document.getElementById("cpassword").style.border="1px solid #DE350B";
            document.getElementById("error-cpassword").style.display="block";
            setCPasswordErr("Password must be up to 6 characters")
        } else if(newPassword !== cPassword){
            document.getElementById("cpassword").style.border="1px solid #DE350B";
            document.getElementById("error-cpassword").style.display="block";
            document.getElementById("new-password").style.border="1px solid #DE350B";
            document.getElementById("error-new-password").style.display="block";
            setPasswordErr("Passwords don't match")
            setCPasswordErr("Passwords don't match")
            
        } else{
            setShowPConfirmation(true)
        }
    }

    return (
        <main className='login'>
            <img src={Bg1} alt="background" className='bg-5'/>
            <img src={Bg2} alt="background" className='bg-6'/>
            
            <div className='logo-section'>
                <img src={Logo} alt="logo" />
            </div>

            {showResetPage ? (<section className='login-form'>
                <p className='form-title'>Reset Password </p>
                {showPConfirmation ? ((<div className='confirm'><img src={ConfirmIcon} alt="confirm"/></div>)) : null}
                {showPConfirmation ? (<p className='form-subtitle'>Your password has been changed successfully</p>):
                (<p className='form-subtitle'>The password should have atleast 6 characters</p>)}
                
                {showPConfirmation ? null :(<Input 
                    id="new-password"
                    label="New Password"
                    placeholder="Enter password"
                    type="password"
                    handleChange={handlePasswordChange}
                    value={newPassword}
                    min="6"
                    error={passwordErr}
                />)}

                {showPConfirmation ? null : (<Input 
                    id="cpassword"
                    label="Confirm Password"
                    placeholder="Confirm password"
                    type="password"
                    handleChange={handleCPasswordChange}
                    value={cPassword}
                    min="6"
                    error={cpasswordErr}
                />)}
                
                {showPConfirmation ? null : (<PrimaryButton
                    text="Submit"
                    handleClick={handleShowPasswordConfirmation}
                />)}
                
                <p className='forgot-text'><Link to="/login">Back to login</Link></p>

            </section>):
            (<section className='login-form'>
                <p className='form-title'>Reset Password </p>
                {showConfirmation ? (<div className='confirm'><img src={ConfirmIcon} alt="confirm"/></div>) : null}

                {showConfirmation ?(<p className='form-subtitle'>
                    A recovery email has been sent to your email address. 
                </p>) : (<p className='form-subtitle'>
                    To enable us reset your password, enter your email below
                </p>)}
                
                {showConfirmation ? null : (<Input 
                    id="reset-email"
                    label="Email Address"
                    placeholder="Enter email"
                    type="email"
                    // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                    handleChange={handleEmailChange}
                    value={resetEmail}
                    error={emailErr}
                />)}
                
                {showConfirmation ? null :  (<PrimaryButton
                    text="Next"
                    handleClick={handleShowConfirmation}
                />)}
                
                <p className='forgot-text'><Link to="/login">Back to login</Link></p>

            </section>)}
            
        </main>
    )
}

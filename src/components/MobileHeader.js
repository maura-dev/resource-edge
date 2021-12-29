import React, { useEffect, useState } from 'react';
import Logo from "../assets/Group.svg";
import Hamburger from "../assets/menu-outline.svg";
import CloseIcon from "../assets/cross.svg";
import { DisabledButton, PrimaryButton } from './Button';
import { useNavigate } from 'react-router-dom';

export default function MobileHeader() {
    const navigate = useNavigate()
    const [ShowNav, setShowNav] = useState(false);
    const user = JSON.parse(localStorage.getItem("loggedUserDetails"))
    const [isLogged, setisLogged] = useState(false)
    useEffect(() => {
        if(user===undefined ||user===null){
            setisLogged(false)
        } else{
            setisLogged(true)
        }
    }, [])

    const toggleNav = ()=>{
        if(ShowNav){
            setShowNav(false)
        } else {
            setShowNav(true)
        }
       
    }

    const handleShowLogin = ()=>{
        navigate("/login")
     }
 
     const handleLogout = () => {
         localStorage.removeItem("loggedUserDetails")
         setisLogged(false)
     }

    return (
        <nav className='mobile-nav' style={{height:ShowNav ? "300px" :"auto"}}>
            <div>
                <img src={Logo} alt="logo"/>
            </div>
            <div className='hamburger-menu' onClick={toggleNav}>
                {ShowNav ?  (<img src={CloseIcon} alt="close-menu"/>) :(<img src={Hamburger} alt="hamburger menu"/>)}
            </div>
            {ShowNav ? (<div className="menu">
                <p>Features</p>
                <p>About</p>
                <br/>
                <br/>
                <div>
                    <PrimaryButton
                    text={isLogged ? "Log out" : "Log in"}
                    handleClick={isLogged ? handleLogout : handleShowLogin}
                    />
                    <DisabledButton
                        text="Sign up"
                    />
                </div>
            </div>) : null}
        </nav>
    )
}

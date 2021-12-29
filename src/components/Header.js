import React, { useEffect, useState } from 'react';
import Logo from "../assets/Logo.svg"
import { GhostButton, PrimaryButton } from './Button';
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("loggedUserDetails"))
    const [isLogged, setisLogged] = useState(false)
    useEffect(() => {
        if(user===undefined ||user===null){
            setisLogged(false)
        } else{
            setisLogged(true)
        }
    }, [])

    const handleShowLogin = ()=>{
       navigate("/login")
    }

    const handleLogout = () => {
        localStorage.removeItem("loggedUserDetails")
        setisLogged(false)
    }

    return (
        <nav className='desktop-nav'>
            <div className='nav-links'>
                <img src={Logo} alt="logo"/>
                <span>Features</span>
                <span>About</span>
            </div>
            <div className='nav-btns'>
                <GhostButton
                    text="Sign up"
                />
                <PrimaryButton
                    text={isLogged ? "Sign out" : "Sign in"}
                    handleClick={isLogged ? handleLogout : handleShowLogin}
                />
            </div>
        </nav>
    )
}

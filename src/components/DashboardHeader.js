/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Hamburger from "../assets/menu.svg";
import Logo from "../assets/Logo.svg";
import Avatar from "../assets/right-content.svg";
import Employee from "../assets/Employee.svg";
import Manager from "../assets/Talent Manager.svg" ;
import { useNavigate } from 'react-router-dom';
import { Check } from '@material-ui/icons';
import MobileLogo from "../assets/Group.svg";

export default function DashboardHeader({email}) {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("loggedUserDetails"))
    const [showDropdown, setShowDropdown] = useState(false);
    const [role, setRole] = useState(null);

    useEffect(() => {
        if(user===undefined ||user===null){
            navigate("/login")
        } else{
            setRole(user.role)
        }
    }, [])

    const toggleShowDropdown = ()=>{
        setShowDropdown(!showDropdown)
    }

    const handleLogout = () => {
        localStorage.removeItem("loggedUserDetails")
        navigate("/")
    }

    const handleRoleOne = () => {
        setRole(1);
        const editedUser = {
            email: user.email,
            password: user.password,
            role: 1,
        }
        localStorage.setItem("loggedUserDetails", JSON.stringify(editedUser))
    }

    const handleRoleTwo = () => {
        setRole(2);
        const editedUser = {
            email: user.email,
            password: user.password,
            role: 2,
        }
        localStorage.setItem("loggedUserDetails", JSON.stringify(editedUser))
    }

    const goToHomePage = ()=>{
        navigate("/")
    }

    return (
        <header>
            <div className='left-content'>
                <img src={Hamburger} alt="menu"/>
                <img src={Logo} alt="logo" className='p-logo' onClick={goToHomePage}/>
                <img src={MobileLogo} alt="logo" className='l-logo' onClick={goToHomePage}/>
                {role === 1 ? (<p>TM Dashboard</p>) : (<p>Employee Dashboard</p>)}
            </div>
            <div className="right-content" onClick={toggleShowDropdown}>
                <img src={Avatar} alt="avatar"/>
            </div>
            {showDropdown ? (<div className='dropdown'>
                <p className='profile-email'>{email}</p>
                <p className='profile'>Profile</p>
                <p className='use'>Use Resource Edge as</p>
                {role===1 ?(<>
                    <div className='role' onClick={handleRoleOne}>
                        <img src={Manager} alt="talent-manager"/>
                        <span>Talent Manager</span>
                        <Check className="role-check"/>
                    </div>
                    <div className='role' onClick={handleRoleTwo}>
                        <img src={Employee} alt="employee"/>
                        <span>Employee</span>
                    </div>
                </>) : (<>
                    <div className='role' onClick={handleRoleTwo}>
                        <img src={Employee} alt="employee"/>
                        <span>Employee</span>
                        <Check className="role-check"/>
                    </div>
                    <div className='role' onClick={handleRoleOne}>
                        <img src={Manager} alt="talent-manager"/>
                        <span>Talent Manager</span>
                    </div>
                    
                </>)}
                
                <hr/>
                <p className='profile' onClick={handleLogout}>Logout</p>
            </div>) : null}
        </header>
    )
}

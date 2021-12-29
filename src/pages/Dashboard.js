/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardHeader from '../components/DashboardHeader'
import DashboardHome from '../components/DashboardHome'

export default function Dashboard() {
    const [loggedUser, setloggedUser] = useState({})
    const navigate= useNavigate();
    const user = JSON.parse(localStorage.getItem("loggedUserDetails"))
    useEffect(() => {
        if(user===undefined ||user===null){
            navigate("/login")
        } else{
            setloggedUser(user)
        }
    }, [])
    return (
        <div >
            <DashboardHeader email={loggedUser.email}/>
            <DashboardHome email={loggedUser.email}/>
        </div>
    )
}

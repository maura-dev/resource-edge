import React from 'react';
import { Link } from 'react-router-dom';
import Circle from "../assets/Circle - empty.svg";
import { DisabledButton } from './Button';

export default function DashboardHome({email}) {
    return (
        <main className='dashboard-cont'>
            <section>
                <p className="hello-text">Hello, {email}</p>
                <p className="welcome-text">Welcome and good to have you back.</p>
            </section>
            <section>
                <p className='t-t-d'>Things to do</p>
                <div className='task'>
                    <img src={Circle} alt="circle"/>
                    <p>Upload your employee performance agreement</p>
                    <p className='begin'><Link to="#">Begin</Link></p>      
                </div>

                <div className='task'>
                    <img src={Circle} alt="circle"/>
                    <p>Start quarterly self review</p>
                    <DisabledButton
                    text="Resume"
                    />      
                </div>
            </section>
            
            
        </main>
    )
}

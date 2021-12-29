import React from 'react';
import { AdminCard } from './Cards';
import IconOne from "../assets/Group 19837.svg";
import IconTwo from "../assets/Group 19838.svg"; 
import IconThree from "../assets/Group 19838 (1).svg"; 
import IconFour from "../assets/Group 19838 (2).svg"; 
import PayrollImg from "../assets/Hello 1.png";
import AdminImg from "../assets/Direct Reports - List.png";
import Unn from "../assets/image 7.svg";
import Tenece from "../assets/image 6.svg";
import Private from "../assets/image 9.svg";
import Genesys from "../assets/image 10.svg";
import Bg1 from "../assets/Group 19841.svg";
import Bg2 from '../assets/Group 19839.svg';

export default function About() {
    return (
        <section className='about'>
            <img src={Bg1} alt="background" className="bg-1"/>
            <section className='admin'>
                <div className='admin-top'>
                    <div className='admin-text'>
                        <p className="features-heading">Admin & Logistics</p>
                        <p className='hero-p features-p'>Manage and track company assets as well as logistics for travelling employees</p>
                    </div>
                    <div className='admin-cards'>
                        <AdminCard
                            icon={IconOne}
                            cardTitle="Travel & Logistics"
                            description="Make travel requests, get approvals, and have access to travel information.
"
                        />
                        <AdminCard
                            icon={IconTwo}
                            cardTitle="Asset Management"
                            description="Manage the acquisition, assignment, and disposition of assets seamlessly."
                        />
                    </div>
                </div>
                <div>
                    <img src={AdminImg} alt="travel and logistics" className='travel'/>
                </div>    
            </section>
            <section className='finance'>
            <img src={Bg2} alt="background" className="bg-2"/>
                <div className='admin-top'>
                    <div className='admin-text'>
                        <p className="features-heading">Finance</p>
                        <p className='hero-p features-p'>Generate invoices, track expenditure, and manage complex payrolls for multiple teams and companies</p>
                    </div>
                    <div className='admin-cards'>
                        <AdminCard
                            icon={IconThree}
                            cardTitle="RE Vouchers"
                            description="Track and manage expenditure for multiple teams across your organisation using Resource Edge Vouchers"
                        />
                        <AdminCard
                            icon={IconFour}
                            cardTitle="Payroll"
                            description="Our easy to use systems takes away the pain of managing complex payrolls for organisations of all sizes."
                        />
                    </div>
                </div>
                <img src={Bg1} alt="background" className="bg-3"/>
                <div>
                    <img src={PayrollImg} alt="payroll" className='payroll'/>
                </div>
                <img src={Bg2} alt="background" className="bg-4"/>

                <div className="sponsors">
                    <img src={Unn} alt="unn"/>
                    <img src={Tenece} alt="tenece"/>
                    <img src={Private} alt="private"/>
                    <img src={Genesys} alt="genesys"/>
                </div>

            </section>
            
        </section>
    )
}

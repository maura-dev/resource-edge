import React from 'react'
import {ResourcesCard} from './Cards';
import IconOne from "../assets/Group 6.svg";
import IconTwo from "../assets/Group 7.svg";
import IconThree from "../assets/Group 8.svg";
import FeaturesImg from "../assets/Frame 19864.png";


export default function Features() {
    return (
        <section className='features'>
            <div className='features-text'>
                <p className="features-heading">Human Resources</p>
                <p className='hero-p features-p'>Onboard new employees, manage the employee lifecycle and measure employee performance.</p>
            </div>
            <div className='resources'>
                <ResourcesCard
                    icon={IconOne}
                    cardTitle="Employee Management"
                    description="From Hiring & Onboarding to Retiring, the Resource Edge Employee Management module  eliminates all the complexities & paperwork involved in managing your team."
                />
                <ResourcesCard
                    icon={IconThree}
                    cardTitle="Performance Management"
                    description="Manage and track employee performance with our easy-to-use tools for goal setting, performance agreements and performance reviews. "
                />
                <ResourcesCard
                    icon={IconTwo}
                    cardTitle="Paid time off"
                    description="Employees can request for paid time off, vacations, sick leaves or educational leaves and get approvals all within Resource Edge. HR managers can equally ensure compliance."
                />

            </div>

            <div>
                <img src={FeaturesImg} alt="features img" className='directory'/>
            </div>
                       
        </section>
    )
}

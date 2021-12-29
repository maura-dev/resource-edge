import React from 'react'

export function ResourcesCard({icon, cardTitle, description}) {
    return (
        <div className="resource-card">
            <div>
                <img src={icon} alt="icon"/>
            </div>
            <p className='resource-title'>{cardTitle}</p>
            <p className='resource-desc'>{description}</p>
        </div>
    )
}

export function AdminCard({icon, cardTitle, description}) {
    return (
        <div className="admin-card">
            <div>
                <img src={icon} alt="icon"/>
            </div>
            <p className='resource-title'>{cardTitle}</p>
            <p className='resource-desc'>{description}</p>
        </div>
    )
}

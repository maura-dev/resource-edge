import { Check } from '@material-ui/icons'
import React from 'react';
import ErrorIcon from "../assets/error.svg";

export default function Input({id, label,type, placeholder, handleChange, value, error, min}) {
    
    return (
        <div className="input-field" >
            <label htmlFor ={id}>{label}</label>
            <input 
                type={type} 
                id={id} 
                name={id} 
                placeholder={placeholder} 
                onChange={handleChange} 
                value={value} 
                minLength={min}
                required/>
            <Check id="check-mark"/>
            <p id={`error-${id}`}><img src={ErrorIcon} alt="error"/> {error}</p>
        </div>
    )
}

import React from 'react'

export function GhostButton({text, handleClick}) {
    return (
        <button style={{
            backgroundColor:"var(--white-color)",
            color:"var(--link-color)",
        }}
        onClick={handleClick}
        >
            {text}
        </button>
    )
}

export function PrimaryButton({text,handleClick}) {
    return (
        <button style={{
            backgroundColor:"var(--primary-color)",
            color:"var(--white-color)",
        }}
        onClick={handleClick}
        >
            {text}
        </button>
    )
}

export function DisabledButton({text, handleClick,disabled}) {
    return (
        <button style={{
            backgroundColor:"var(--background)",
            color:"var(--link-color)",
        }}
        onClick={handleClick}
        disabled={disabled}
        >
            {text}
        </button>
    )
}

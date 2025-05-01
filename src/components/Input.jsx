import React from 'react'

export const Input = ({label, value,handleValueChange, type,field, className}) => {
    return (
        <>
        <div>
            <span>{label}</span>
        </div>
        <input className={className} type={type} value={value} onChange={handleValueChange}/>
        </>
    )
}

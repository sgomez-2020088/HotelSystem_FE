import React from 'react'

export const Input = ({label, value,handleValueChange, type,field, className, accept}) => {
    return (
        <>
        <div>
            <label>{label}</label>
        </div>
        <input className={className} type={type} value={value} onChange={handleValueChange} accept={accept}/>
        </>
    )
}

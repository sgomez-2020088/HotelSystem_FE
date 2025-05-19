import React from 'react'

export const NavBar = ({children,className}) => {
    return (
        <nav className={className}>{children}</nav>
    )
}

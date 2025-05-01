import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import './WelcomePage.css'

export const WelcomePage = () => {
    return (
        <> 
            <NavBar className='nav'>
                <Link to="/register">
                    <button className='btn'>Register</button>
                </Link>
                <Link to="/login">
                    <button className='btn'>Login</button>
                </Link>
            </NavBar>
            <body> 
                <div className='welcome'>
                    <h1>Welcome</h1>
                    <div className='img'>
                    </div>
                </div>

            </body>
        </>
    )
}

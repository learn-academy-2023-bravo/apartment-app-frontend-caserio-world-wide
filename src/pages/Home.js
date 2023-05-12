import React from 'react'
import { NavLink } from "react-router-dom"
import CWW from '../assets/CWW.png'


const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Caserio World Wide</h1>
            <NavLink to = '/apartmentindex'> 
                <div className="home-image-container">
                    <img src={ CWW } alt='Caserio World Wide Home image' className='home-image'/>
                </div>
            </NavLink>
        </div>
    )
}

export default Home 

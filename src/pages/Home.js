import React from 'react'
import { NavLink } from "react-router-dom"
import CWW from '../assets/CWW.png'

const Home = () => {
    return (
        <NavLink to = '/apartmentindex'> 
            <div>
                <img src={ CWW } alt='Caserio World Wide Home image' className='home-image'/>
            </div>
        </NavLink>
    )
}

export default Home
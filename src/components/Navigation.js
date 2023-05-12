import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import CWWlogo from '../assets/CWWlogo.png'

const Navigation = ({ current_user }) => {
    return(
        <>
            
            <Nav className="nav">
                {current_user && (
                    <>

                        <NavLink to = '/home'> 
               <img src={ CWWlogo } alt='Caserio World Wide Logo' className='Logo'/>
                        </NavLink>
                        <NavItem>
                            <NavLink to="/apartmentprotectedindex" className="nav-link">
                                My Listings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/apartmentindex" className="nav-link">
                                Current Listings
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/apartmentnew" className="nav-link">
                                Create Listing
                            </NavLink>
                        </NavItem>
                    </>
                )}
                {!current_user && (
                    <>
                        <NavLink to = '/apartmentindex'> 
                            <img src={ CWWlogo } alt='Caserio World Wide Logo' className='Logo'/>
                        </NavLink>
                        <NavItem>
                            <NavLink to="/signup" className="nav-link">
                                Sign Up!
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </NavItem>
                    </>
                )} 
            </Nav>
        </>
    )
}
export default Navigation
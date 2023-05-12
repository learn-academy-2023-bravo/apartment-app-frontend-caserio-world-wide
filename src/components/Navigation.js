import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import CWWlogo from '../assets/CWWlogo.png'
import { useState } from "react"



const Navigation = ({ current_user }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const url = "http://localhost:3001"

    const navigate = useNavigate()

    const logout = () => {
        fetch(`${url}/logout`, {
          headers: {
            "Content-Type": 'application/json',
            "Authorization": localStorage.getItem("token") //retrieve the token 
          },
          method: 'DELETE'
        })
        .then(payload => {
        localStorage.removeItem("token")  // remove the token
        setCurrentUser(null)
      })
      .catch(error => console.log("log out errors: ", error))
      }
    

    const handleClick = () => {
        logout()
        navigate('/')
      }

    return(
        <>
            <Nav className="nav">
                {current_user && (
                    <>

                        <NavLink to = '/'> 
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
                        <NavItem>
                            <NavLink onClick={handleClick} to="/" className="nav-link">
                                Log Out
                            </NavLink>
                        </NavItem>
                    </>
                )}
                {!current_user && (
                    <>
                        <NavLink to = '/'> 
                            <img src={ CWWlogo } alt='Caserio World Wide Logo' className='Logo'/>
                        </NavLink>
                        <NavItem>
                            <NavLink to="/signup" className="nav-link">
                                Sign Up!
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  to="/login" className="nav-link">
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
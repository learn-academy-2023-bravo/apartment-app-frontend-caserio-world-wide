import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import mockUser from "./mockUser";
import mockApartment from "./mockApartment";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentEdit from "./pages/ApartmentEdit";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./components/SignUp";
import Login from "./components/Login"
import './App.css'



const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUser[0])
  const [currentApartment, setCurrentApartment] = useState(mockApartment[0])

  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/apartmentindex" element={<ApartmentIndex />} />
          <Route path="/apartmentshow/:id" element={<ApartmentShow />} />
          <Route path="/apartmentnew" element={<ApartmentNew/>} />
          <Route path="/apartmentedit/:id" element={<ApartmentEdit/>} />
          <Route path="/apartmentedit/:id" element={<ApartmentEdit/>} />
          <Route path="*" element={<NotFound/>} />
        
        </Routes>
      </div>
      <Footer />
   
    </>
  )
}


export default App
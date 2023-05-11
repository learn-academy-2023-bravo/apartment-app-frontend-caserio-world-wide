import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import NotFound from "./pages/NotFound"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import Footer from "./components/Footer"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import './App.css'
import mockApartments from "./mockApartments"
import mockUsers from "./mockUsers"
import ApartmentProtectedIndex from './pages/ApartmentProtectedindex'


const App = () => {
  const [currentUser] = useState(mockUsers)
  const [apartments, setApartments] = useState(mockApartments)
  
  useEffect(() => {
    readApartment()
  }, [])

  const readApartment=() => {
    fetch('http://localhost:3000/apartments')
    .then(response => response.json())
    .then(payload => {
      setApartments(payload)
    })
    .catch(error => console.log("Apartment read errors", error))
  }

  const createApartment = (createdApartment) => {
    fetch('http://localhost:3000/apartments', {
      body: JSON.stringify(createdApartment),
      headers : {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(() => readApartment())
      .catch(error => console.log("Create apartment errors:", error))
  }
  const updateApartment = (selectedApartment, id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      body: JSON.stringify(selectedApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => readApartment())
    .catch(error => console.log("Updated apartment errors:", error))
  }
  const deleteApartment = (id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => readApartment())
    .catch(error => console.log("Delete errors:", error))
  }
  return (
    <>
      <Header current_user={!currentUser}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartmentindex' element={<ApartmentIndex apartments={apartments}/>} />
        <Route path='/apartmentshow/:id' element={<ApartmentShow apartments={apartments}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/apartmentprotectedindex' element={<ApartmentProtectedIndex apartments={apartments} current_user={currentUser}/>} />
        <Route path='/apartmentnew' element={<ApartmentNew createApartment={createApartment}/>} />
        <Route path='/apartmentedit/:id' element={<ApartmentEdit apartments={apartments} updateApartment={updateApartment} deleteApartment={deleteApartment} 
        />} />
        <Route path='*' element={<NotFound />} />q
      </Routes>
      <Footer />
    </>
  )
}

export default App
import { useState } from 'react'
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
import mockApartment from "./mockApartments"
import mockUser from "./mockUsers"
import ApartmentProtectedIndex from './pages/ApartmentProtectedindex'


const App = () => {
  const [currentUser] = useState(mockUser[0])
  const [apartments] = useState(mockApartment)


  return (

    <>
    
    <Header current_user={currentUser}/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/apartmentedit/:id' element={<ApartmentEdit />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/apartmentindex' element={<ApartmentIndex apartments={apartments}/>} />
    <Route path='/apartmentshow/:id' element={<ApartmentShow apartments={apartments}/>} />
    <Route path='/apartmentprotectedindex' element={<ApartmentProtectedIndex apartments={apartments} current_user={currentUser}/>} />
    <Route path='/apartmentnew' element={<ApartmentNew />} />
    <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    
    </>
    
  );
}

export default App
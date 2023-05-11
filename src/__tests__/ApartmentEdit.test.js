import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ApartmentEdit from "../pages/ApartmentEdit";
import mockApartments from "../mockApartments";


describe("<ApartmentEdit />", () => {
  it("renders the edit apartment form", () => {
    render(     
      <MemoryRouter initialEntries={["/apartmentEdit/1"]}>
        <Routes>
          <Route path="/apartmentedit/:id" element={<ApartmentEdit apartments={mockApartments}/>}/>
        </Routes>
      </MemoryRouter>
    )

    const priceInput=screen.getByRole("textbox", {name: /price/i})
    expect(priceInput).toBeInTheDocument()
    
    const streetInput=screen.getByRole("textbox", {name: "Street"})
    expect(streetInput).toBeInTheDocument()
    
    const unitInput=screen.getByRole("textbox", {name: /unit/i})
    expect(unitInput).toBeInTheDocument()
    
    const cityInput=screen.getByRole("textbox", {name: /city/i})
    expect(cityInput).toBeInTheDocument()
    
    const stateInput=screen.getByRole("textbox", {name: /state/i})
    expect(stateInput).toBeInTheDocument()
    
    const squareFootageInput=screen.getByRole("textbox", {name: "Sq Ft."})
    expect(squareFootageInput).toBeInTheDocument()
    
    const bedroomsInput=screen.getByRole("textbox", {name: /bedroom/i})
    expect(bedroomsInput).toBeInTheDocument()

    const bathroomInput=screen.getByRole("textbox", {name: /bathrooms/i})
    expect(bathroomInput).toBeInTheDocument()

    const petsInput=screen.getByRole("textbox", {name: /pets/i})
    expect(petsInput).toBeInTheDocument()
  })  
})
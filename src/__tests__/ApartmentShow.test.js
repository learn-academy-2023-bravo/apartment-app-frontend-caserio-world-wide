import { render, screen } from "@testing-library/react"
import ApartmentShow from "../pages/ApartmentShow"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"

describe("<ApartmentShow />", () => {
    it("renders image of apartment exterior", () => {
        render(
            <BrowserRouter>
                <ApartmentShow />
            </BrowserRouter>
        )}
    )})

describe("<ApartmentShow />", () => {
    
        it("renders without crashing", () => {})
        })
    
        it("should contain clickable links", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
            <ApartmentShow />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("Return to Apartment Listings"))
        expect(screen.getByText("Return to Apartment Listings")).toBeInTheDocument()
    })
        
        
        
        
        

  
import { screen, render } from "@testing-library/react"
import ApartmentIndex from "../pages/ApartmentIndex"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
    it("renders the list of all apartments", () => {
        render(
          <BrowserRouter>
            <ApartmentIndex apartments={mockApartments}/>
          </BrowserRouter>
        )
        
        const element = screen.getByText("Recent Listings")
        expect(element).toBeInTheDocument()
    })
})
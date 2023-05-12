import { screen, render } from "@testing-library/react"
import ApartmentProctedIndex from "src/pages/ApartmentProtectedindex.js"
import mockApartments from "../mockApartments"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentProctedIndex />", () => {
    it("renders the list of all apartments", () => {
        render(
          <BrowserRouter>
            <ApartmentProctedIndex apartments={mockApartments}/>
          </BrowserRouter>
        )
        
        const element = screen.getByText("My Apartments")
        expect(element).toBeInTheDocument()
    })
})
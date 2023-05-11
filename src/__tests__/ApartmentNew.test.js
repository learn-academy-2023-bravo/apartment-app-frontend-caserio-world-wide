import { render, screen } from "@testing-library/react"
import ApartmentNew from "../pages/ApartmentNew"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentNew />", () => {
    it("renders without crashing", () => {})

    it("should render a placeholder", () => {
        render(
            <BrowserRouter>
                <ApartmentNew />
            </BrowserRouter>
        )
        const priceInput = screen.getByPlaceholderText("Enter Price")
        const streetInput = screen.getByPlaceholderText("Enter Street")
        expect(priceInput).toBeInTheDocument()
        expect(streetInput).toBeInTheDocument()
    })
})
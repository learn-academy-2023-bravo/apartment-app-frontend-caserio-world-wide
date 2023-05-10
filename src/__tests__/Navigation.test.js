import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navigation from "../components/Navigation.js"
import userEvent from "@testing-library/user-event"

describe("<Navigation />", () => {
    
    it("renders without crashing", () => {})
    })

    it("should contain active links", () => {
    render(
        <BrowserRouter>
        <Navigation />
        </BrowserRouter>
    )
    userEvent.click(screen.getByText("Login"))
    expect(screen.getByText("Login")).toBeInTheDocument()
})
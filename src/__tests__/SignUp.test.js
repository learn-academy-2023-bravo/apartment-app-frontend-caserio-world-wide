import { render, screen } from "@testing-library/react"
import SignUp from "../components/SignUp"
import { BrowserRouter } from "react-router-dom"

describe("<SignUp />", () => {
    it("renders without crashing", () => {})

    it("should render a Email placeholder", () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        )
        const emailInput = screen.getByPlaceholderText('email')
        const passwordInput = screen.getByPlaceholderText('password')
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
    })
})

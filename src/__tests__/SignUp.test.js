import { render, screen, fireEvent } from "@testing-library/react"
import SignUp from "../components/SignUp"
import { BrowserRouter } from "react-router-dom"

describe("<SignUp />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
  })

  it("should render email and password inputs with correct placeholder texts", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
    const emailInput = screen.getByPlaceholderText('Enter email')
    const passwordInput = screen.getByPlaceholderText('Enter password')
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })
})
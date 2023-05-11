import { render } from "@testing-library/react"

import Login from "../components/Login.js"


describe("<Login />", () => {
    it("renders without crashing", () => {})
    render(<Login/>)
})

describe('Login component', () => {
    it('submits the form when the "Login" button is clicked', () => {
        const handleSubmit = jest.fn()
        render(<Login onsubmit={handleSubmit}/>)
    })
})

   
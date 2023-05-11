import { render } from "@testing-library/react"
import ApartmentIndex from "../pages/ApartmentIndex"
import { BrowserRouter } from "react-router-dom"

describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    render(
        <BrowserRouter>
        <ApartmentIndex />
      </BrowserRouter>
      
    )
  })
})

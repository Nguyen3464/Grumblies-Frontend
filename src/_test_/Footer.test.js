import { render, screen } from "@testing-library/react"
import Footer from "../Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom"

describe("<Footer", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>,
            div)
        const test = screen.getByText(/Footer/i)
        expect(test).toBeInTheDocument()
    })

})


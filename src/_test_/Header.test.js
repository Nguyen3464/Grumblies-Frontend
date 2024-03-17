import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "../Components/Header/Header"

describe("<Header", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>,
        div)
        const link1 = screen.getByText(/Grumblies/i)
        const link2 = screen.getByText(/Recipes/i)
        const link3 = screen.getByText(/Login/i)
        expect(link1).toBeInTheDocument()
        expect(link2).toBeInTheDocument()
        expect(link3).toBeInTheDocument()
    })

    it("Header has clickable links", () => {
        const div = document.createElement("div")
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>,
            div
        )
        userEvent.click(screen.getByText("Grumblies", {exact: false}))
        userEvent.click(screen.getByText("Recipes", {exact: false}))
        userEvent.click(screen.getByText("Login", {exact: false}))
        expect(screen.getByText("Grumblies")).toBeInTheDocument()
        expect(screen.getByText("Recipes")).toBeInTheDocument()
        expect(screen.getByText("Login")).toBeInTheDocument()
    })

})

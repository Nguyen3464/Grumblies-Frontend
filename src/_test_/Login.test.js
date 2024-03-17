import { render } from "@testing-library/react"
import Login from "../Pages/Login"

describe("<Login", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<Login />, div)
    })
})
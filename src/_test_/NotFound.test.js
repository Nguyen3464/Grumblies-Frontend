import { render } from "@testing-library/react"
import NotFound from "../Pages/NotFound"

describe("<NotFound", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<NotFound />, div)
    })
})
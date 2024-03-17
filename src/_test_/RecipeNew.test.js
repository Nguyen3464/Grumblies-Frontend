import { render } from "@testing-library/react"
import RecipeNew from "../Pages/RecipeNew"

describe("<RecipeNew", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<RecipeNew />, div)
    })
})
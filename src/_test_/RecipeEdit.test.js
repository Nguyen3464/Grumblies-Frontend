import { render } from "@testing-library/react"
import RecipeEdit from "../Pages/RecipeEdit"

describe("<RecipeEdit", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div")
        render(<RecipeEdit />, div)
    })
})
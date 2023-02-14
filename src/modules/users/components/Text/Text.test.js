import { cleanup, render, screen } from "@testing-library/react"
import Text from "./Text"
import "@testing-library/jest-dom"


afterEach(() => {
    cleanup()
})

describe("Text test", () => {
    test('Render Text Component', () => {
        render(<Text toggle={true} displayTxt="displayTxt" />)

        const text = screen.getByTestId("text")

        expect(text).toBeInTheDocument()
    })

    test('Text Component Conditional Render: toggle == true', () => {
        render(<Text toggle={true} displayTxt="displayTxt" />)

        const text = screen.getByTestId("text")

        expect(text).toHaveTextContent("displayTxt")
    })

    test('Text Component Conditional Render: toggle == false', () => {
        render(<Text toggle={false} displayTxt="displayTxt" />)

        const text = screen.getByTestId("text")

        expect(text).toBeEmptyDOMElement()
    })

})
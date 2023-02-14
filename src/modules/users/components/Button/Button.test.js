import { cleanup, render, screen } from "@testing-library/react"
import Button from "./Button"
import "@testing-library/jest-dom"

afterEach(() => {
    cleanup()
})

describe("Button test", () => {
    const setToggle = jest.fn()
    const BTN_TEXT = "Hola c:"
    render(<Button btnTxt={BTN_TEXT} setToggle={setToggle}  />) //función render
    
    const btn = screen.getByTestId("button")//guardamos en variable

    test("Button renders correctly", () => {
        expect(btn).toBeInTheDocument() //usamos variable para pruebas
    })

    test("Button Text Prop", () => {
      expect(btn).toHaveTextContent(BTN_TEXT)
    })

})
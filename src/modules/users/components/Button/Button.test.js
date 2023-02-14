import { cleanup, render, screen } from "@testing-library/react"
import Button from "./Button"
import "@testing-library/jest-dom"

afterEach(() => {
    cleanup()
})

describe("Button test", () => {
    const setToggle = jest.fn()
    render(<Button btnTxt="Hola c:" setToggle={setToggle} />) //función render
    const btn = screen.getByTestId("button")//guardamos en variable
    test("Button renders correctly", () => {
        expect(btn).toBeInTheDocument() //usamos variable para pruebas
    })

})
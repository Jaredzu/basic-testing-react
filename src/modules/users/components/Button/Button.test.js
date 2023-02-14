import { cleanup, render, screen } from "@testing-library/react"
import Button from "./Button"
import "@testing-library/jest-dom"


afterEach(() => {
    cleanup()
})

describe("Button test", () => {

    const setToggle = jest.fn() // Funcion Fake

    render(<Button btnText="hola" setToggle={setToggle} />) // Renderizando

    const btn= screen.getByTestId("button") // Lo guardo en variable

    test("Button renders correctly", () => {
        expect(btn).toBeInTheDocument()  // usamos variable para las pruebas
     })
})
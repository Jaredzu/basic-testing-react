import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

describe("App Component", () => {

	test("App-test-1: All childs rendered", () => {
		render(<App />)

		const text = screen.getByTestId("text")
		const btn = screen.getByTestId("button")

		expect(text).toBeInTheDocument()
		expect(btn).toBeInTheDocument()
	})

})


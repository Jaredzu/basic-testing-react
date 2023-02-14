import { cleanup, render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

afterEach(() => {
	cleanup()
})

describe("App Component", () => {
	// describe == suites test
	// test == test

	test("App-test-1: All childs rendered", () => {
		console.log("App-test-1: All childs rendered");

		render(<App />)
		const text = screen.getByTestId("text")
		const btn = screen.getByTestId("button")

		expect(text).toBeInTheDocument()
		expect(btn).toBeInTheDocument()
	})

	test("App-test-2: Text component value", () => {

		console.log("App-test-2: Text component value");
		render(<App />)

		const text = screen.getByTestId("text")

		expect(text).toHaveTextContent("Hello sun!")
	})

	test("App-test-3:Toggle button behavior", () => {
		console.log("App-test-3:Toggle button behavior");

		render(<App />)

		const text = screen.getByTestId("text")
		const btn = screen.getByTestId("button")


		expect(text).toHaveTextContent("Hello sun!")


		fireEvent.click(btn)
		expect(text).toBeEmptyDOMElement()
		
		fireEvent.click(btn)
		expect(text).toHaveTextContent("Hello sun!")

		// ... 

	})

},
)


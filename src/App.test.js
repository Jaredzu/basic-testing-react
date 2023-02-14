import { cleanup, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

afterEach(() => {
	console.log("_____");
	cleanup()
})

describe("App Component", () => {

	test("App-test-1: All childs rendered", () => {
		console.log("App-test-1: All childs rendered\n");

		render(<App />)

		const text = screen.getByTestId("text")
		const btn = screen.getByTestId("button")

		expect(text).toBeInTheDocument()
		expect(btn).toBeInTheDocument()
	})

	test("App-test-2: Text component value", () => {
		console.log("App-test-2: Text component value\n");


		render(<App />)

		const text = screen.getByTestId("text")

		expect(text).toHaveTextContent("Hello sun!")
	})


	test("App-test-3: Toggle button behavior", () => {
		console.log("App-test-3: Toggle button behavior\n");


		render(<App />)

		const text = screen.getByTestId("text")
		const btn = screen.getByTestId("button")

		expect(text).toHaveTextContent("Hello sun!")

		// ... 

	})

})


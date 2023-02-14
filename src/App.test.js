const { screen } = require("@testing-library/react")
afterEach(() => {
	console.log("despues");
})
beforeEach(() => {
	console.log("antes");
})
describe("App Component", () => {

	test("App test", () => {
		console.log(1)
	})

	test("App test 2", () => {
		console.log(2)
	})

},
)

describe('App Component 2', () => {
	test('test', () => {
		console.log(3);
	})
	test('should first', () => {
		console.log(4);
	})

});

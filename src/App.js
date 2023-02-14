import "./App.css"
import { users } from "./modules"
import { useState } from "react";
const { components: { Text, Button } } = users

const App = () => {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="App">
			<Button setToggle={setToggle} btnTxt="Toggle Text" />
			<Text toggle={toggle} displayTxt="Hello sun!" />
		</div>
	);
}

export default App;
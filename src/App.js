import React, { Component } from "react";
import "./App.css";

class App extends Component {
	handleToggle(event) {
		console.log("hello from the button side");
	}
	render() {
		return <button onClick={this.handleToggle}>Toggle User</button>;
	}
}

export default App;

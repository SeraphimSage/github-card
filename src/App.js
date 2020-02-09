import React, { Component } from "react";
import "./App.css";

const gitHubUserInfoURL = gitHubUserName =>
	`https://api.github.com/users/${gitHubUserName}`;
class App extends Component {
	state = {
		user: {},
		active: false
	};
	handleToggle = event => {
		fetch(gitHubUserInfoURL("SeraphimSage"))
			.then(response => response.json())
			.then(responsBody => {
				console.log(responsBody);
				this.setState({ user: responsBody });
			});
	};
	render() {
		return <button onClick={this.handleToggle}>Toggle User</button>;
	}
}

export default App;

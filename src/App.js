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
		if (this.state.active === false) {
			fetch(gitHubUserInfoURL("SeraphimSage"))
				.then(response => response.json())
				.then(responsBody => {
					console.log(responsBody);
					this.setState({ user: responsBody, active: true });
				});
		} else {
			this.setState({ active: false });
		}
	};
	render() {
		return (
			<>
				<button onClick={this.handleToggle}>Toggle User</button>
				{this.state.active && (
					<>
						<img src={this.state.user.avatar_url} alt="user profile" />
						<h1>{this.state.user.name}</h1>
						<p>Followers: {this.state.user.followers}</p>
						<p>Following: {this.state.user.following}</p>
					</>
				)}
			</>
		);
	}
}

export default App;

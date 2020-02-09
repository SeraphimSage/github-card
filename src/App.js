import React, { Component } from "react";
import "./App.css";
import { Button } from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";

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
				<Button onClick={this.handleToggle}>Toggle User</Button>
				{this.state.active && (
					<Card>
						<Image
							src={this.state.user.avatar_url}
							alt="user profile"
							wrapped
							ui={false}
						/>
						<Card.Content>
							<Card.Header>{this.state.user.name}</Card.Header>
							<Card.Meta>
								<span className="date">From {this.state.user.location}</span>
							</Card.Meta>
							<Card.Content extra>
								<>
									<Icon name="user" />
									{this.state.user.following} Following
								</>
							</Card.Content>
						</Card.Content>
					</Card>
				)}
			</>
		);
	}
}

export default App;

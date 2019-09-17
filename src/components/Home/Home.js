import React, { Component } from 'react';
import './Home.scss';

export class Home extends Component {
	render() {
		return (
			<div id="Home">
				<div id="Card">
					<h1>Chris Carton</h1>
					<h2 className="punchline">
						Création de sites internet, à Lille
					</h2>
					<a href="#Offres" className="btn">
						<i class="fa fa-arrow-circle-down"></i>
					</a>
				</div>
			</div>
		)
	}
}

export default Home

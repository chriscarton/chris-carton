import React from 'react';
import './Home.scss';

export class Home extends Component {
	render() {
		return (
			<div id="Home">
				This is my home component.

				<div id="Card">
					<h1>Chris Carton</h1>
					<h2 className="punchline">
						Création de sites internet, à Lille
					</h2>
					<a href="#Offres" className="btn">
						arrowDown
					</a>
				</div>
			</div>
		)
	}
}

export default Home;
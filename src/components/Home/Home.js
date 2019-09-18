import React, { Component } from 'react';
import './Home.scss';

export class Home extends Component {
	
	constructor(props){
		super(props);
		this.scrollToOffres.bind(this);
	}

	scrollToOffres(){
		//Attention là il y aurait un petit refactoring à faire
		let offre = document.querySelector('#Content');
		console.log(offre.offsetTop);
		window.scroll({
			top: offre.offsetTop,
			left: 0,
			behavior: 'smooth'
		});
	}
	
	render() {
		return (
			<div id="Home">
				<div id="Card" onClick={this.scrollToOffres}>
					<div className="inner">
						<h1>Chris Carton</h1>
						<h2 className="punchline">
							Création de sites internet, à Lille
						</h2>
						<a href="#Offres" className="btn">
							<i className="fa fa-arrow-circle-down"></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Home

import React, { Component } from 'react';
import './About.scss';

import left from '../../assets/img/portrait-nb/left.png';
import middle from '../../assets/img/portrait-nb/middle.png';
import right from '../../assets/img/portrait-nb/right.png';


export class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            image:middle
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleMouseEnter(e){
        this.setState({
            image:left
        });
    }

    handleMouseOut(e) {
        this.setState({
            image: right
        });
        
        setTimeout(()=>{
            this.setState({
                image: middle
            });
        },1000)
    }

    render() {
        return (
            <div id="About">
                <div className="content">
                    <div className="photo" 
                        onMouseEnter={this.handleMouseEnter}
                        onMouseOut={this.handleMouseOut}
                    >
                        <img src={this.state.image} alt="" id="Portrait"/>
                    </div>
                    <h3 className="title">Chris Carton</h3>
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum! Alias totam dolorum aspernatur reprehenderit tempora suscipit aut facilis quo libero quaerat!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum! 
                        </p> 
                    </div>
                </div>
            </div>
        )
    }
}

export default About

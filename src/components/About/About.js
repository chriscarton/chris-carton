import React, { Component } from 'react';
import './About.scss';
export class About extends Component {
    render() {
        return (
            <div id="About">
                <div className="content">
                    <div className="photo"></div>
                    <h3 class="title">Chris Carton</h3>
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

import React, { Component } from 'react';
import './Offre.scss';
import Item from '../Item/Item.js';

import design from './img/design.jpg';
import mobile from './img/mobile.jpg';
import technologies from './img/technologies.jpg';
import sur_mesure from './img/sur-mesure.jpg';



export class Offre extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:1,
                    name:"Un design unique.",
                    img:design,
                    text:"Un blabla ici."
                },
                {
                    id:2,
                    name:"Des fonctionnalités sur-mesure.",
                    img:sur_mesure,
                    text:"Un autre blabla ici."
                },
                {
                    id:3,
                    name:"Des technologies de pointe",
                    img:technologies,
                    text:"Toujours du blabla"
                },
                {
                    id:4,
                    name:"100% mobile",
                    img:mobile,
                    text:"Et encore du blabla"
                }
            ]
        }
    }

    render() {
        return (
            <div id="Content">
                <h1 
                    className="title" 
                    id="Typed"
                    data-sal-duration="1000"
                    data-sal="fade-in"
                    data-sal-delay="100"
                    data-sal-easing="ease-out-bounce"
                    >
                    Conception et réalisation de votre site internet.
                </h1>
                
                <div className="grid">

                    <div className="intro">
                        Je vous propose la création de votre site internet de A à Z. C'est une offre complète et unique qui inclut le design graphique, l'intégration, le développement et la mise en ligne. 
                    </div>

                    {this.state.items.map((item)=>(
                        <Item key={item.id} item={item}>
                            <h2 className="title">{item.name}</h2>
                        </Item>
                    ))}

                   
                </div>
            </div>
        )
    }
}

export default Offre

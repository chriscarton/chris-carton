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
                <h1 className="title">
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

                    {/* 
                    <Item
                        name={<h2 className="title">Un design <span>unique</span>.</h2>}
                        translateX={500}
                        text={<p>Un sacré <br/>blabla non ?</p>}
                        img={design}
                        bottom={10}
                        right={10}
                        width={300}
                    />

                    <Item
                        name={<h2 className="title">Des fonctionnalités <span>sur-mesure</span>.</h2>}
                        text={<p>Un sacré blabla non ?</p>}
                        img={sur_mesure}
                        top={100}
                        left={200}
                        width={200}
                    />
                    
                    <Item
                        name={<h2 className="title">Des <span>technologies</span> de pointe.</h2>}
                        text={<p>Un sacré blabla non ?</p>}
                        img={technologies}
                        bottom={25}
                        left={25}
                        height={400}
                    />

                    <Item
                        name={<h2 className="title"><span>100%</span> mobile.</h2>}
                        text={<p>Un sacré blabla non ?</p>}
                        img={mobile}
                        bottom={-5}
                        left={-5}
                    />
                    
                    
                        
                        <div className="info">
                            <p>Le saviez-vous ? </p>
                            <p>30% des connexions à votre site web passent par le mobile. Votre site ne doit donc plus être capable de s'adapter à eux, il doit être conçu pour eux.</p>
                        </div> 
                   */}
                </div>
            </div>
        )
    }
}

export default Offre

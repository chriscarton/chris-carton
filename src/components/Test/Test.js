import React, { Component } from 'react';
import './Test.scss';

export class Test extends Component {
    render() {
        return (
            <div id="Content">

                {/* 
                <h1 className="title">
                    Je vous propose la création complète de votre site internet.
                </h1>
                <h1 className="title">
                    Conception et réalisation de votre site internet.
                </h1>
                <h1 className="title">
                    Création ou refonte de votre site internet.
                </h1>
                */}

                <h1 className="title">
                    Conception et réalisation de votre site internet.
                </h1>
                <div className="grid">
                    <div className="intro">
                        Je vous propose la création de votre site internet de A à Z. C'est une offre complète et unique qui inclut le design graphique, l'intégration, le développement et la mise en ligne. 
                    </div>
                    <div class="item">
                        <h2 className="title">Un design unique</h2>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quidem corrupti error optio animi temporibus reprehenderit dolore facere, placeat voluptates aliquid. Rem voluptatibus ipsam ex beatae, hic porro recusandae nisi?
                        </div>
                    </div>
                    <div class="item">
                        <h2 className="title">Des fonctionnalités <span className="no-break">sur-mesure</span>.</h2>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quidem corrupti error optio animi temporibus reprehenderit dolore facere, placeat voluptates aliquid. Rem voluptatibus ipsam ex beatae, hic porro recusandae nisi?
                        </div>
                    </div>
                    <div class="item">
                        <h2 className="title">Des technologies de pointe</h2>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quidem corrupti error optio animi temporibus reprehenderit dolore facere, placeat voluptates aliquid. Rem voluptatibus ipsam ex beatae, hic porro recusandae nisi?
                        </div>
                    </div>
                    <div class="item">
                        <h2 className="title">100% mobile</h2>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, quidem corrupti error optio animi temporibus reprehenderit dolore facere, placeat voluptates aliquid. Rem voluptatibus ipsam ex beatae, hic porro recusandae nisi?
                        </div>
                        <div className="info">
                            <p>Le saviez-vous ? </p>
                            <p>30% des connexions à votre site web passent par le mobile. Votre site ne doit donc plus être capable de s'adapter à eux, il doit être conçu pour eux.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test

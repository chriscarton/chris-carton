import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div id="Footer">
                <div id="Quote">
                    <blockquote>
                        Un bon designer trouvera un moyen élégant de mettre tout ce dont vous avez besoin sur une page. Un excellent designer saura vous convaincre que la moitié de ce contenu est superflu.
                    </blockquote>
                    <cite>Mike Monteiro</cite>
                </div>
                <div id="End">Chris Carton 2019 - Tous droits réservés. <a href="">Mentions légales</a></div>
            </div>
        )
    }
}

export default Footer

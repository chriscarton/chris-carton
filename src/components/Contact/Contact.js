import React, { Component } from 'react';
import './Contact.scss';

export class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                {/* <h2>CONTACT</h2> */}
                <h2>Et vous ? Quel est votre message ?</h2>
                <form>
                    <div>
                        <input type="text" placeholder="Votre prénom"/>
                        <input type="text" placeholder="Votre nom" />
                    </div>
                    <textarea placeholder="Quel est votre message ?"></textarea>
                    <input type="email" placeholder="Votre email" />
                    <button>Envoyer</button>
                </form>
            </div>
        )
    }
}

export default Contact

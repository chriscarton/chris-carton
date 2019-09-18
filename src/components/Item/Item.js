import React, { Component } from 'react';
import './Item.scss';

export class Item extends Component {
    render() {

        let item = this.props.item;
        
        return (
            <div 
                className="item"
                data-sal-duration="1000"
                data-sal="slide-up"
                data-sal-delay={150*item.id}
                data-sal-easing="ease-out-bounce"
            >
                {this.props.children}
                <div className="text">
                    {item.text}
                </div>
                <img 
                    src={item.img} 
                    alt={item.alt} 
                />
            </div>
        )
    }
}

export default Item

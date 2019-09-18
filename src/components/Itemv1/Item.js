import React, { Component } from 'react';
import './Item.scss';

export class Item extends Component {
    render() {

        return (
            <div 
                className="item"
            >
                {this.props.name}
                <div>
                    {this.props.text}
                </div>
                <img 
                    src={this.props.img} 
                    alt={this.props.alt} 
                    style={{
                        left:this.props.left,
                        top: this.props.top,
                        right: this.props.right,
                        bottom: this.props.bottom,
                        width: this.props.width,
                        height: this.props.height
                    }}/>
            </div>
        )
    }
}

export default Item

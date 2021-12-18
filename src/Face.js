import React, { Component } from 'react';
import './Coin.css';

class Face extends Component {
    render() { 
        return(
            <div>
                <img className="Coin-size" src={this.props.info.img} alt={this.props.info.side} />
            </div>
        );
    }
}
 
export default Face;
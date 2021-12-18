import React, { Component } from 'react';
import Face from './Face';

class Coin extends Component {
    static defaultProps = {
        coins: [
            {side: 'heads', img: "https://tinyurl.com/react-coin-heads-jpg"}, 
            {side: 'tails', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOMiomWayr-vP6VbsQ2lYzBoZ3NFHNqp9EI_DO7bRC_cBDa9Fa_dZ8KjtncwbhXH49P5Y&usqp=CAU"}
        ]
    };

    constructor(props) {
        super(props);
        this.state = { 
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.Flip = this.Flip.bind(this);
    }
    choice(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    Flip() {
        let newCoin = this.choice(this.props.coins);
        this.setState(st => {
            return { 
                currCoin: newCoin, 
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        });
    }

    render() { 
        return (
            <div>
                <h1>Let's Flip a Coin</h1>
                {this.state.currCoin && <Face info={this.state.currCoin} />}
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails!</p>
                <button onClick={this.Flip}>Flip Me !</button>
            </div>
        );
    }
}
 
export default Coin;
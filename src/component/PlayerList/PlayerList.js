import React, { useState } from 'react';
import './PlayerList.css';
import fakeData from '../../fakeData/players.js';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const PlayerList = () => {
    const first10 = fakeData.slice(0, 11);
    const [players, setPlayers] = useState(first10)
    const [cart, setCart] = useState([]);
    
    const handleAddPlayer = (player) =>{
        let newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="player-container">
            <div className="player-area">
                {
                    players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player}></Player>)
                }
            </div>
            <div className="cart-area">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default PlayerList;
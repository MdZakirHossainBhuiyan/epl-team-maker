import React, { useEffect, useState } from 'react';
import './PlayerList.css';
import fakeData from '../../fakeData/players.js';
import Player from '../Player/Player';
import Cart from '../Cart/Cart';

const PlayerList = () => {
    const [players, setPlayers] = useState(fakeData)
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setPlayers(players)
      }, [])
    
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
import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    const totalBudget = cart.reduce((total, salary) => (total + salary.salary), 0);

    return (
        <div className="cart">
            <h1>Team info</h1>
            <h4>Selected Player: {cart.length}</h4>
            <p className="budget">Total Budget: ${totalBudget} M</p>
            <FontAwesomeIcon icon={faFutbol} /> <FontAwesomeIcon icon={faFutbol} /> <FontAwesomeIcon icon={faFutbol} />

            <br/><br/>
            {
                cart.map(player => <p>{player.name} - ${player.salary} M</p>)
            }
        </div>
    );
};

export default Cart;
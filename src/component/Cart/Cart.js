import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalBudget = cart.reduce((total, salary) => (total + salary.salary), 0);

    return (
        <div className="cart">
            <h1>Team info</h1>
            <h4>Selected Player: {cart.length}</h4>
            <p>Total Budget: ${totalBudget} M</p>
            {
                cart.map(player => <p>{player.name} - ${player.salary} M</p>)
            }
        </div>
    );
};

export default Cart;
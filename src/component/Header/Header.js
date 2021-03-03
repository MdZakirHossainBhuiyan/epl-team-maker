import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h1>Premier League</h1>
            <nav>
                <a href="/list">player list</a>
                <a href="/team">my team</a>
                <a href="/statistics">statistics</a>
            </nav>
        </div>
    );
};

export default Header;
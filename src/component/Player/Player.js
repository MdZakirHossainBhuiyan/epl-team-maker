import React from 'react';
import "./Player.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Player = (props) => {
    const {name, image, salary, team} = props.player;
    return (
        <div className="player">
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <h1>{name}</h1>
                <p>${salary} M</p>
                <p>{team}</p>

                <Button onClick={() => props.handleAddPlayer(props.player)} variant="outline-success"><FontAwesomeIcon icon={faUserPlus} /> Add Player</Button>
            </div>
        </div>
    );
};

export default Player;
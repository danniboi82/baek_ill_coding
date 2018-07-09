import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Cards = (props) => {
    let style = {};
    if(props.showing) {
        style.backgroundColor = props.backgroundColor;
    }
    return (
        <div className='card-container' style={style} onClick={props.clicked}>

        </div>
    )
}

Cards.propTypes = {
    showing : PropTypes.bool.isRequired,
    backgroundColor : PropTypes.string.isRequired,
    clicked : PropTypes.func.isRequired,
}

export default Cards;
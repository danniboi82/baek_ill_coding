import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <div className="brand-logo">
                <a href="">
                    My Recipes</a>
            </div>
            <ul className='nav-menu'>
                <li><a href="">New Recipe</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
import React from 'react';
import logo from '../img/logo.png';

const Nav = () => (

<div className="nav">
    <img src={logo} alt=""/>
    <div className="nav__menu">
        <a href="#">plesovi</a>
        <a href="#">instruktori</a>
        <a href="#">kontakt</a>
    </div>
</div>

);

export default Nav;
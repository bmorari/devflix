import React from 'react';
import logo from '../../assets/logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../ButtonLink';

function Menu () {
    return (
        <nav className="Menu">
            <a href = "/">
                <img className="logo" src={logo} alt="DEVFLIX logo"/>
            </a>

            <Button as="a" className="ButtonLink" href = "/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;
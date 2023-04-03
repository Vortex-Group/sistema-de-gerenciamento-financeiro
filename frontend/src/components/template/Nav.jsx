import React from "react";
import './Nav.css';

const Nav = props => {
    return(
        <aside className="nav d-none d-sm-flex" style={props.style}>
            <nav className="nav-items">   
                <li><a href="/" style={props.nav}>Início</a></li>
                <li><a href="/" style={props.nav}>Sobre</a></li>
                <li><a href="/" style={props.nav}>Serviços</a></li>
                <li><a id="nosso-time" href="/" style={props.border}>Nosso time</a></li>
                <li><a id="login" href="/" style={props.nav}>Entrar</a></li>
                <li><a href="/"><button style={props.backg}>Começar</button></a></li>
            </nav>
        </aside>
    )
};

export default Nav;
    
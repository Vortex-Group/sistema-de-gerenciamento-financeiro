import React, { Fragment } from "react";
import './Footer.css';

import gmailLogo from '../../assets/img/gmail-logo.png'

const Footer = props =>{
    return (
        <Fragment>
        <footer className="footer">
            <div className="footer-header flex-column">
                <h1 style={{fontSize: '3rem'}}>Aurum</h1>
                <p style={{fontSize: '0.9rem'}}>&copy; Copyright 2023 - Todos os direitos reservados.</p>
            </div>
            
            <div className="footer-sobre">
                <p style={{fontWeight: '700'}}>Sobre</p>
                <a>Equipe</a>
                <a>Objetivo</a>
                <a>Por que usar o Aurum?</a>
                <a>Como meus dados são utilizados?</a>
            </div>

            <div className="footer-servicos">
                <p style={{fontWeight: '700'}}>Serviços</p>
                <a href="/servico/receitas">Receitas</a>
                <a href="/servico/despesas">Despesas</a>
                <a href="/servico/relatorio">Relatório</a>
                <a href="/servico/limite-gastos">Limite de gastos</a>
            </div>

            <div className="footer-contato">
                <p style={{fontWeight: '700'}}>Contato</p>
                <a href="mailto:suporte.pvortex@gmail.com"><img alt="contato" src={gmailLogo}></img></a>
            </div>
        </footer>
    </Fragment>
    )
};

export default Footer;
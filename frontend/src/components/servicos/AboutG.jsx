import React, { Fragment } from "react";
import About from "./About";

import Header from "../template/Header";
import Nav from "../template/Nav";

const pageContent = {
    title: 'Limite de Gastos',
    intro: 'Ao estabelecer um limite de gastos mensais, você pode controlar melhor suas despesas e evitar gastar mais do que recebe, o que pode levar a dívidas e dificuldades financeiras. Nosso sistema te permite avaliar e estabelecer quanto você pode gastar mensalmente.',
    funcionalidade: 'Com nossa ferramenta você pode identificar áreas onde pode economizar dinheiro e cortar gastos desnecessários, o que pode ajudá-lo a acumular mais dinheiro e alcançar suas metas financeiras a longo prazo.',
    dados: 'De acordo com um relatório do National Endowment for Financial Education (NEFE), os consumidores que têm um plano financeiro têm menos probabilidade de sofrer estresse financeiro e mais probabilidade de se sentir satisfeitos com suas finanças.',
    porque: 'O Sistema Monetis utiliza tecnologias atuais e otimizadas para proporcionar uma melhor experiência a você, juntamente com um layout projetado nos mínimos detalhes, visando tornar seu uso simples e objetivo.',
    iniciar: 'E aí, pronto para organizar sua vida financeira e obter controle sobre seus gastos?'
}

export default props =>
    <Fragment>
        <Nav style={{marginLeft: '60rem', marginTop: '3rem'}} nav={{color: 'white'}} border={{color: '#fff', paddingRight: '2rem', borderRight: '2px solid #ffffff'}} backg={{backgroundColor: '#5a5a5a'}}/>
        <Header title='Limite de Gastos' style={{marginTop: '12rem', marginBottom: '0rem', padding: '0rem 2rem'}}/>
        <About { ...pageContent } />
    </Fragment>

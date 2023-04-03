import React, { Fragment } from "react";
import About from "./About";

import Header from "../template/Header";
import Nav from "../template/Nav";

const pageContent = {
    title: 'Despesas',
    intro: 'Ao separar suas despesas mensais em categorias, você terá uma visão mais clara de onde seu dinheiro está sendo gasto e poderá identificar áreas em que pode economizar ou investir mais.',
    funcionalidade: 'Com as despesas separadas e organizadas, fica mais fácil criar um orçamento realista para cada categoria. Isso pode ajudá-lo a evitar gastos excessivos e a se preparar para despesas recorrentes. Com o Monetis, você pode fazer isso.',
    dados: 'Uma pesquisa realizada pelo SPC Brasil e pela CNDL em 2019 revelou que 61% dos brasileiros não controlam o orçamento doméstico. Por outro lado, 39% afirmaram que mantêm um controle rígido das despesas e que isso ajuda a manter as finanças em dia e conseguem poupar dinheiro. A utilização de ferramentas como planilhas e sistemas, como o Monetis, podem ser muito úteis nesse processo.',
    porque: 'Nossa ferramenta foi projeta para ser simples e intuitiva, de modo que você possa identificar com clareza suas despesas e dessa forma, obter um maior controle de suas finanças.',
    iniciar: 'Pronto para começar a ter controle sobre suas despesas?'
}

export default props =>
    <Fragment>
        <Nav style={{marginLeft: '60rem', marginTop: '3rem'}} nav={{color: 'white'}} border={{color: '#fff', paddingRight: '2rem', borderRight: '2px solid #ffffff'}} backg={{backgroundColor: '#5a5a5a'}}/>
        <Header title='Despesas' style={{marginTop: '12rem', marginBottom: '0rem', padding: '0rem 2rem'}}/>
        <About { ...pageContent }/>
    </Fragment>

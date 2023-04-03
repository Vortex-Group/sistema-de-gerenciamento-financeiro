import React, { Fragment } from "react";
import About from "./About";

import Header from "../template/Header";
import Nav from "../template/Nav";

const pageContent = {
    title: 'Receita',
    intro: 'Sua receita é o montante total de dinheiro que entra para você, durante um determinado período de tempo, geralmente um mês. Isso inclui todos os valores recebidos, como salários, rendimentos de investimentos, aluguel, vendas de produtos ou serviços, entre outros.',
    funcionalidade: 'Saber o quanto se ganha é extremamente importante porque é a partir dessa informação que se pode planejar o orçamento, ou seja, definir quanto se pode gastar em diferentes categorias, como moradia, alimentação, transporte, lazer, entre outros. Além de permitir que você defina objetivos financeiros realistas, como economizar para uma viagem ou para a aposentadoria.',
    dados: 'De acordo com uma pesquisa realizada em 2019 pelo Serviço de Proteção ao Crédito (SPC Brasil) e pela Confederação Nacional de Dirigentes Lojistas (CNDL) apontou que 64% dos brasileiros não controlam seus gastos e que 44% dos entrevistados têm dificuldade para pagar todas as contas em dia. Além disso, a pesquisa também mostrou que 60% dos entrevistados têm o hábito de fazer compras por impulso, o que pode levar a um descontrole financeiro e a endividamentos.',
    porque: 'Com o Monetis você tem controle absoluto sobre sua receita, podendo visualizar, por exemplo, quanto lhe resta e com o quê gastou. Assim, poderá pensar qual será o próximo passo a tomar, visando claro, um bom investimento de seu dinheiro.',
    iniciar: 'Vai aproveitar essa oportunidade?'
}

export default props =>
    <Fragment>
        <Nav style={{marginLeft: '60rem', marginTop: '3rem'}} nav={{color: 'white'}} border={{color: '#fff', paddingRight: '2rem', borderRight: '2px solid #ffffff'}} backg={{backgroundColor: '#5a5a5a'}}/>
        <Header title='Receita' style={{marginTop: '12rem', marginBottom: '0rem', padding: '0rem 2rem'}}/>
        <About { ...pageContent }/>
    </Fragment>

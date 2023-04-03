import React, { Fragment } from "react";
import About from "./About";

import Header from "../template/Header";
import Nav from "../template/Nav";

const pageContent = {
    title: 'Relatórios',
    intro: 'Com relatórios detalhados e precisos, você terá informações mais dinâmicas e claras ​​para tomar decisões financeiras importantes, como investir em uma determinada necessidade, pagar uma dívida ou fazer uma compra de alto valor.',
    funcionalidade: 'Os relatórios permitem que os usuários identifiquem tendências e padrões em suas finanças, ajudando-os a entender onde estão gastando seu dinheiro e onde podem fazer ajustes para economizar mais.',
    dados: 'Pesquisas realizadas pela Universidade Estadual da Carolina do Norte e pela Universidade de Harvard, concluíram que os usuários de software estão propensos a tomar decisões mais precisas e mais rápidas quando as informações são apresentadas visualmente e que compreendem melhor as informações quando elas são apresentadas em gráficos e tabelas.',
    porque: 'Com o sistema Monetis você terá uma visão panorâmica e clara de sua situação financeira, projetada nos mínimos detalhes para você.',
    iniciar: 'E então? O que está esperando para obter essa poderosa ferramenta na palma da sua mão?'
}

export default props =>
    <Fragment>
        <Nav style={{marginLeft: '60rem', marginTop: '3rem'}} nav={{color: 'white'}} border={{color: '#fff', paddingRight: '2rem', borderRight: '2px solid #ffffff'}} backg={{backgroundColor: '#5a5a5a'}}/>
        <Header title='Relatórios' style={{marginTop: '12rem', marginBottom: '0rem', padding: '0rem 2rem'}}/>
        <About { ...pageContent }/>
    </Fragment>
import React from "react";

import "./Cadastro.css"

export default props =>{
    return(
        <div className="principal">
            <section className="leftzone">
                <h1 className="logo">ICONE</h1>
                <form className="cadastrar" method="post" action="?">
                    <center><h1 id="titulo-cadastrar">Cadastrar conta</h1></center>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <a className="botao" href="/"><button className="botao-cadastrar">Cadastrar</button></a>
                </form>
            </section>
        
            <section className="rightzone">
                <form className="entrar" method="post" action="?">
                    <center><h1 id="teste">Entrar na conta</h1></center>
                    <input type="text" placeholder="Nome"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <center><a href="/"><button className="botao-entrar">Entrar</button></a></center>
                </form>
            </section>
        </div>
    )
}
import React from "react";
import { Routes, Route } from 'react-router-dom'

import Main from "../components/template/Main";

import Gastos from "../components/servicos/AboutG";
import Relatorio from "../components/servicos/AboutRel";
import Despesas from "../components/servicos/AboutD";
import Receitas from "../components/servicos/AboutR";
import Home from "../components/sistema/Home";
import Cadastro from "../components/cadastro/Cadastro";

const SystemRoutes = props =>{
    return(
        <Routes>
            <Route exact path="/" element={<Main />}/>
            
            <Route path="/servico/limite-gastos" element={<Gastos />}/>
            <Route path="/servico/relatorio" element={<Relatorio />}/>
            <Route path="/servico/despesas" element={<Despesas />}/>
            <Route path="/servico/receitas" element={<Receitas />}/>
            <Route path="/cadastro" element={<Cadastro />}/>

            <Route path="/home" element={<Home />}/>

            <Route path="*" element={<Main />}/>
        </Routes>
    )
}

export default SystemRoutes;
import React, { Fragment } from "react";
import './Home.css';

import User from "./services/User";
import UserDash from "./services/UserDash";
import UserSpent from "./services/UserSpent";
import UserRevenue from "./services/UserRevenue";
import UserLimits from "./services/UserLimits";
import Report from "./services/Report";

const Home = props => {
    return (
        <Fragment>
        <div className="home-content">
            <div className="head-nav">
            <aside className="nav d-none d-sm-flex">
                <nav className="nav-items">   
                    <li><a href="/">Visão geral</a></li>
                    <li><a href="/">Despesas</a></li>
                    <li><a href="/">Relatórios</a></li>
                    <li><a href="/">Limites de gastos</a></li>
                </nav>
            </aside>
            </div>
            <div className="main-home">
                <div className="user-dash">
                    <UserDash />
                </div>
                <div className="user-options">
                    <div className="user-account">
                        <User />
                    </div>  
                    <div className="user-pay">
                        <UserSpent />
                    </div>
                    <div className="user-receive">
                        <UserRevenue />
                    </div>
                    <div className="user-limits">
                        <UserLimits />
                    </div>
                </div>
                <div className="relatorio-simplificado">
                    <Report />             
                </div>
            </div>
        </div>
    </Fragment>
    )
};

export default Home;
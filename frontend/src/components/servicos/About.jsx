import React, { Fragment } from "react";
import './About.css';

import Footer from "../template/Footer";

import img1 from '../../assets/img/saldo.png'
import img3 from '../../assets/img/despesas.png'

const About = props =>{
    return(
        <Fragment>
        <div className="item-content">
            <div className="about-item" style={{marginTop: '0rem'}}>
                <div className="item-intro row">
                    <p className="item-intro-description col" style={{marginLeft: '1rem', padding: '0rem 2rem'}}>
                    {props.intro}
                    <p style={{marginTop: '2rem'}}><a><button>COMEÇAR</button></a></p>
                    </p>
                    
                    <div className="col" style={{marginLeft: '7rem'}}>
                        <img alt="tool-img" src={img1}></img>
                    </div>
                </div>

                <div className="tool-description1 row" style={{marginTop: '20rem', textAlign: 'justify'}}>
                    <div className="col" style={{marginLeft: '7rem'}}>
                        <img alt="tool-img" src={img1}></img>
                    </div>
                    <p className="item-description col" style={{color: '#fff', fontSize: '1.7rem', marginRight: '4rem'}}>
                    <p style={{color: '#919191', fontSize: '1.2rem'}}>Sobre a funcionalidade</p>
                    {props.funcionalidade}
                    </p>
                </div>

                <div className="tool-description2 row" style={{marginTop: '5rem', textAlign: 'justify'}} >
                    <p className="item-description2 col" style={{color: '#fff', fontSize: '1.7rem', marginLeft: '7rem'}}>
                    <p style={{color: '#919191', fontSize: '1.2rem'}}>Precisa de dados?</p>
                    {props.dados}
                    </p>
                    <div className="col" style={{marginLeft: '4rem'}}>
                        <img alt="tool-img" src={img3}></img>
                    </div>
                </div>

                <div className="tool-description3 row" style={{marginTop: '5rem', textAlign: 'justify'}}>
                    <div className="col" style={{marginLeft: '7rem'}}>
                        <img alt="tool-img" src={img1}></img>
                    </div>
                    <p className="item-description col" style={{color: '#fff', fontSize: '1.7rem', marginRight: '4rem'}}>
                    <p style={{color: '#919191', fontSize: '1.2rem'}}>Por que escolher o Monetis?</p>
                    {props.porque}
                    </p>
                </div>

                <div className="start-session row" style={{marginTop: '20rem', textAlign: 'center'}} >
                    <p style={{color: '#919191', fontSize: '1.2rem'}}>Se interessou?</p>
                    <h2 style={{color: '#fff'}}>{props.iniciar}</h2>
                    <a style={{marginBottom: '15rem'}}><button>EU QUERO!</button></a>
                </div>
            </div>
            <Footer />
        </div>
    </Fragment>
    )
};

export default About;
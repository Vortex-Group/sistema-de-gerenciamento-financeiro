import React , {Fragment} from "react";

import './Main.css'
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from './Header';
import Nav from './Nav'
import Footer from "./Footer";

import icon1 from '../../assets/img/icon.png'
import icon2 from '../../assets/img/icon2.png'
import icon3 from '../../assets/img/icon3.png'

import img1 from '../../assets/img/saldo.png'
import img2 from '../../assets/img/relatorio.png'
import img3 from '../../assets/img/despesas.png'
import img4 from '../../assets/img/limites.png'

import dev1 from '../../assets/img/Ian.jpeg'
import dev2 from '../../assets/img/Isabella.jpeg'
import dev3 from '../../assets/img/Samuel.jpeg'
import dev4 from '../../assets/img/SoldierBoy rebaixado.jpeg'
import dev5 from '../../assets/img/Yuri.jpeg'

const Main = props => {
    return (
        <Fragment>
        <div className="main">
            <section id="inicio" className="main-content">
                <div className="leftzone">
                    <Header title='ÍCONE'/>
                    <h1 className="home-titulo">
                    Organize. <br></br>Invista. <br></br>Controle.
                    </h1>
                    <p>O Aurum te permite fazer tudo isso, em qualquer lugar, a qualquer hora.</p>
                    <a href="/cadastro"><button>COMEÇAR</button></a>
                    <a id="sobre">Saiba mais</a>
                    
                    <aside className="side-nav-mobile d-lg-none d-sm-flex">
                        <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="bi bi-list"></i></a>
                        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">ÍCONE</h5>
                                <a data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x-circle"></i></a>
                            </div>
                            <div class="offcanvas-body">
                                <a>Início</a>
                                <a>Sobre</a>
                                <a>Serviços</a>
                                <a>Equipe</a>
                            </div>
                        </div>
                    </aside>
                </div>
                <div className="rightzone d-none d-sm-flex flex-column">
                    <Nav border={{paddingRight: '2rem', borderRight: '2px solid #272B35'}}/>
                </div>
            </section>

            <section id="sobre" className="sobre">
                <p style={{marginBottom: '0rem'}}>Sobre o sistema</p>
                <h1 style={{fontWeight: '700'}}>A solução perfeita para sua vida financeira</h1>
                <p style={{marginBottom: '4rem'}} className='d-none d-sm-flex'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                
                <div className="vantagens">
                    <div className="limites">
                        <img alt="icon" src={icon3}></img>
                        <h3 style={{fontWeight: '600'}}>Estabeleça  limites</h3>
                        <p>Lorem ipsum dolor akkasj</p>
                        <a>Entenda</a>
                    </div>

                    <div className="gastos">
                        <img alt="icon" src={icon2}></img>
                        <h3 style={{fontWeight: '600'}}>Controle seus gastos</h3>
                        <p>Lorem ipsum dolor akkasj</p>
                        <a><button>Saiba mais</button></a>
                    </div>

                    <div className="resultados">
                        <img alt="icon" src={icon1}></img>
                        <h3 style={{fontWeight: '600'}}>Tenha resultados</h3>
                        <p>Lorem ipsum dolor akkasj</p>
                        <a>Entenda</a>
                    </div>
                </div>
            </section>

            <section id="servicos" className="servicos">
                <p style={{marginBottom: '0rem', marginTop: '5rem'}}>Serviços</p>
                <h1 style={{fontWeight: '700', marginTop: '0rem'}}>Nossas ferramentas</h1>

                <div className="ferramentas">
                    <div className="colun-left">
                        <img alt="icon" src={img1}></img>
                        <h3 style={{fontWeight: '600'}}>Lorem ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <a>Entenda</a>
                        <br></br>
                        <img alt="icon" src={img2}></img>
                        <h3 style={{fontWeight: '600'}}>Lorem ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <a>Entenda</a>
                    </div>
                    
                    <div className="colun-right">
                        <img alt="icon" src={img3}></img>
                        <h3 style={{fontWeight: '600'}}>Lorem ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <a>Entenda</a>
                        <br></br>
                        <img alt="icon" src={img4}></img>
                        <h3 style={{fontWeight: '600'}}>Lorem ipsum</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                        <a>Entenda</a>
                    </div>
                </div>
            </section>

            <section id='equipe' className="equipe">
                <p style={{marginBottom: '0rem'}}>Time</p>
                <h1 style={{fontWeight: '700', marginBottom: '0rem'}}>Conheça nosso time</h1>

                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="carousel-area">
                                <img src={dev1} class="d-block" alt="carrosel-img"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Ian Vinícius Vasconcelos</h5>
                                    <p>Desenvolvedor frontend</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-area">
                                <img src={dev2} className="d-block" alt="carrosel-img"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Isabella Queiroz</h5>
                                    <p>Desenvolvedora frontend</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-area">
                                <img src={dev3} className="d-block" alt="carrosel-img"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Samuel Alves</h5>
                                    <p>Desenvolvedor Frontend</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-area">
                                <img src={dev4} className="d-block" alt="carrosel-img"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Thiago Tomé</h5>
                                    <p>Desenvolvedor Backend</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-area">
                                <img src={dev5} className="d-block" alt="carrosel-img"></img>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Yuri Gabriel</h5>
                                    <p>Desenvolvedor Backend</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
        <div>
            <Footer />
        </div>
    </Fragment>
    )
};

export default Main;

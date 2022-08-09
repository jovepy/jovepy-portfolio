import 'bootstrap/dist/css/bootstrap.css';
import 'reactjs-popup/dist/index.css';
import 'tailwindcss/tailwind.css';
import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo';
import ReactDOM from 'react-dom';
import Script from 'next/script'



const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div className='content_bg'>
      <div className='container-fluid'>
      <Head>     
                     
        <NextSeo
          title="Jovepy - Rodrigo Jove - Portfólio"
          description="Jove.py - Rodrigo Jove - Desenvolvedor Python e Graduando em Economia.
          Skills: Python | Django | Next.Js | Full-Stack | Business Intelligence | POP Automation"
          canonical="https://www.jovepy.com.br/"
          openGraph={{
            type: 'website',
            url: 'https://www.jovepy.com.br/',
            site_name: 'jovepy',}}
            content="google-site-verification=Gpy2hbxpjPq-doXi6-bIzFx75DxoGmNr-ADI1lMUwWk"
        />
        
          <meta charset="utf-8"/> 
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>      
    
    <nav className="navbar fixed-top bg-white">
      <div className="container-fluid">
      <div className='text-center'>
        <svg className='python' width="50px" height="50px" viewBox="0 0 256 255" version="1.1" style={{opacity:'100%'}}>
          <defs>
              <linearGradient x1="12.9593594%" y1="12.0393928%" x2="79.6388325%" y2="78.2008538%" id="linearGradient-1">
                  <stop stopColor="#387EB8" offset="0%"></stop>
                  <stop stopColor="#366994" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="19.127525%" y1="20.5791813%" x2="90.7415328%" y2="88.4290372%" id="linearGradient-2">
                  <stop stopColor="#FFE052" offset="0%"></stop>
                  <stop stopColor="#FFC331" offset="100%"></stop>
              </linearGradient>
          </defs>
          <g>
              <path className='pythonpath' id="blue-python" d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z" fill="url('#linearGradient-1')"></path>

              <path className='pythonpath' id="yellow-python" d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z" fill="url('#linearGradient-2')"></path>
          </g>
      </svg>
    </div>
        <a className="navbar-brand " href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="offcanvas offcanvas-end border-0" style={{opacity:'90%'}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header bg-warning bg-gradient">
            <h5 className="offcanvas-title fs-1 fw-bolder" id="offcanvasNavbarLabel" style={{opacity:'80%'}}>Jove.py</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" style={{background:'#3770A0'}}>
            <ul className="navbar-nav justify-content-end flex-grow-2 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}><h5 className='text-start fs-2'>Inicio</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-2'>Serviços</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-2'>Projetos</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-2'>Artigos</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-2'>Contato</h5></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div>
    <div className='row'><br></br></div>
    <div className='row'><br></br></div>
    <div className='row'><br></br></div>
    <div className='row'><br></br></div>    
    <div className="card mb-3 shadow-lg bg-light p-4 ">
          <div className="row g-0">
            <div className="col-md-4 text-center p-4">  
            <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <Image className="img-fluid rounded-circle text-center" loader={myLoader} src='./perfil.png' alt="Criamos a sua solulçao" width={200} height={200} /> 
            </div>
            </div>
            <div className="col-lg-8">
              <div className="card-body align-middle">
                <h5 className="text-start fs-1 fw-semibold" >Rodrigo Jovê</h5>
                  <p className="fw-light card-text text-start align-middle">
                  <ul className="list-group list-group-flush">
                      <li className="list-group list-group-flush">
                        <a type="button" className='list-group-item fs-4 bg-light' data-bs-toggle="modal" data-bs-target="#exampleModal1">
                        Sobre
                        </a>
                        <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel1">Sobre Rodrigo Jovê</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                              <p>Graduando em Economia pela UFPB (2019 - atualmente), integrante do Labimec, Laboratório de Inteligência Artificial de Macroeconomia Computacional da UFPB (2019 - atualmente), desenvolvedor Python (2019 - atualmente). </p>
                              <h5>2019</h5>
                              <p>Criação de scripts em notbooks, jupyter e google colab,  sob a linguagem python, buscando analisar e visualizar dados decorrentes de webscraping.</p>
                              <h5>2020</h5>
                              <p>Geração de indicadores sobre os hospitalizados por covid-19 na Paraíba (PB), buscando a previsão de cenários de alta e baixa, criação de dashboards de utilidade pública e boletins de suporte aos gestores de municípios da PB.</p>
                              <h5>2021</h5>
                              <p>Criação de scripts relacionados à finanças e economia, análise de dados sob I.A, tomada de decisão sob I.A, criação de dashboards, automação de tarefas, além da geração de indicadores sobre hospitalizados por covid-19 na PB.</p>
                              <h5>2022</h5>
                              <p>Criação de scripts relacionados à extração de dados (PDFs, Imagens e WEB), gerenciamento automático, integração de dados externos, otimização de processos complexos, desenvolvimento WEB e ferramentas de utilidade ao público</p>
                          </div>
                          <div className="modal-footer">
                          <button type="button" className='btn btn-outline-warning' data-bs-toggle="modal" data-bs-target="#exampleModal">Habilidades</button>
                          <button className="btn btn-outline-warning" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group list-group-flush">
                    <a type="button" className='list-group-item fs-4 bg-light' data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Habilidades
                    </a>
                      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content d-grid gap-3">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Minhas Habilidades</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div className="d-grid gap-3">
                                <div>
                                  <h3 className="fw-light fs-5"> Python</h3>
                                    <div className="progress opacity-50">
                                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}> </div>
                                      </div>
                                    </div>
                                    <div>
                                    <h3 className="fw-light fs-5"> Html, Css, Javascript</h3>
                                      <div className="progress opacity-50">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                        </div>
                                      </div>
                                      <div>
                                        <h3 className="fw-light fs-5"> Django</h3>
                                          <div className="progress opacity-50">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}></div>
                                            </div>
                                          </div>
                                          <div>
                                            <h3 className="fw-light fs-5"> Next.JS</h3>
                                              <div className="progress opacity-50">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                                </div>
                                              </div>
                                          </div>
                            <div>
                            <h3 className="fw-light fs-5"> Extração de dados</h3>
                              <div className="progress opacity-50">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                </div>
                              </div>
                            <div>
                            <h3 className="fw-light fs-5"> Manipulação de dados</h3>
                              <div className="progress opacity-50">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100" style={{width: "97%"}}></div>
                                </div>
                              </div>
                              <div>
                                <h3 className="fw-light fs-5"> Visualização de dados</h3>
                                  <div className="progress opacity-50">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="99%" aria-valuemin="0" aria-valuemax="100" style={{width: "99%"}}></div>
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="fw-light fs-5"> Finanças Quantitativas</h3>
                                    <div className="progress opacity-50">
                                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal-footer">
                                    <button  type="button" className='btn btn-outline-warning' data-bs-toggle="modal" data-bs-target="#exampleModal1">Sobre</button>  
                                    <button className="btn btn-outline-warning" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>                  
                        </li>
                  <li className="list-group list-group-flush">
                    <a type="button" className='list-group-item fs-4 bg-light' data-bs-toggle="modal" data-bs-target="#exampleModal2">Caderno</a>
                    <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel2">Caderno Público</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            Tenha acesso ao meu Notion para aprender programação e economia de forma simples e prática.
                          </div>
                          <div className="modal-footer">
                          <button className="btn btn-outline-warning" type="button" onClick={() => Router.push('https://tender-silica-d85.notion.site/Jove-py-a23ca3b771e345649f73c965803197d5')}>Ver Notion</button>
                          <button className="btn btn-outline-warning" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </p>
            </div>
            <div className="d-grid gap-2 p-2">
        <button className="btn btn-outline-warning" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
      </div>
    
    
    </div>
    </div>
    
    </div>
    
    </div>
    
    {/*footer padrao*/}      
    </div>
    <p className="card-text text-center"><small className="text-muted">Criado por Jove.py</small></p>

    </div>
  
  )
}

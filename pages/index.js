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
    <div className='content_bg' >
      <div><br></br></div>
      <div><br></br></div>
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
    
    <nav className="navbar fixed-top bg-white mb-4 p-2">
      <div className="container-fluid">
      <div className='text-center'>
      <svg width="50px" height="50px" className='python' viewBox="0 0 255 255" version="1.1">
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
        <path id="blue-python" d="M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z" fill="url('#linearGradient-1')" className='pythonpath'></path>

        <path id="yellow-python" d="M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z" fill="url('#linearGradient-2')" className='pythonpath'></path>
    </g>
</svg>
    </div>
        <a className="navbar-brand" href="https://www.jovepy.com.br/"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="offcanvas offcanvas-end border-0 text-center" style={{opacity:'90%'}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header content_bg_bar">
            <h5 className="offcanvas-title fs-1 fw-bolder" id="offcanvasNavbarLabel" style={{opacity:'70%'}}>Jove.py</h5>
            
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" style={{background:'#3770A0', color:'white'}}>
            <ul className="navbar-nav justify-content-end flex-grow-2 pe-3 ">
              <li className="nav-item mt-3">
                <Link className="nav-link active" aria-current="page" href="https://www.jovepy.com.br/" style={{color:'white'}}><div className='border-bottom mb-0'><h5 className='text-center fs-4 mb-0'>Inicio</h5></div></Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" href="/servicos" style={{color:'white'}}><div className='border-bottom mb-0'><h5 className='text-center fs-4 mb-0'>Serviços</h5></div></Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" href="http://jovepy-django.herokuapp.com/" style={{color:'white'}}><div className='border-bottom mb-0'><h5 className='text-center fs-4 mb-0'>Projetos</h5></div></Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" href="http://jovepy-django.herokuapp.com/blog" style={{color:'white'}}><div className='border-bottom mb-0'><h5 className='text-center fs-4 mb-0'>Artigos</h5></div></Link>
              </li>
              <li className="nav-item mt-3">
                <Link className="nav-link" href="#" style={{color:'white'}}><div className='border-bottom mb-0'onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Gostaria de saber mais informações sobre os seus serviços.')}><h5 className='text-center fs-4 mb-0'>Contato</h5></div></Link>
              </li>
            </ul>
            
            <div className='container-sm text-center'>
            <div className="grid grid-cols-1 gap-1 place-items-center h-32">
                <div className="btn-group text-center" role="group">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="60" height="60" fill="currentColor" className="heartbeat bi bi-linkedin m-1" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove/')} style={{color:'white'}}>
                    
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  
                  <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="heartbeat bi bi-whatsapp m-1" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')} style={{color:'white'}}>
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="heartbeat bi bi-github m-1" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://github.com/jovepy')} style={{color:'white'}}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>  

                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="heartbeat bi bi-instagram m-1" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://www.instagram.com/jovepy/')} style={{color:'white'}}>
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
              </div>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className='container-fluid-sm mb-2 mt-4'>  
    <div className='bannersection' style={{opacity:'70%'}}>
    <section className="slide-option">
      <div id="stffull" className="highway-slider">
        <div className="highway-barrier">
          <ul className="highway-lane">
            <li className="highway-car">
              <Image className="img-fluid  text-center" loader={myLoader} src='./banner bar pb.png' alt="Criamos a sua solulçao" width={1461} height={100} />
            </li>
            <li className="highway-car">
              <Image className="img-fluid  text-center" loader={myLoader} src='./banner bar pb.png' alt="Criamos a sua solulçao" width={1461} height={100} />
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
    </div> 
    <div className="card mb-5 shadow-lg bg-light p-4 ">
          <div className="row g-0">
            <div className="col-md-4 text-center p-4">  
            <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <Image className="fade-in-fwd img-fluid rounded-circle text-center" loader={myLoader} src='./perfil.png' alt="Criamos a sua solulçao" width={200} height={200} /> 
            </div>
            </div>
            <div className="col-8">
              <div className="card-body align-middle">
                <h5 className="text-start fs-1 fw-semibold mb-0" >Rodrigo Jovê</h5>
                  <small className='text-star fs-6 fw-light mb-0 mt-0 text-muted' >Jove.py</small>
                  <p className="fw-light card-text text-start align-middle">
                  
              </p>
            </div>
            
    </div>
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
                              <h5>Formação</h5>
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
                            <div className='border-top'></div>
                            <div className="text-center d-grid gap-2 m-4">
                          <button type="button" className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:'white',background:'#3770A0'}}>Habilidades</button>
                          <button className="btn" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')} style={{color:'white',background:'#3770A0'}}>Envie-me uma mensagem</button>
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
                          <div className="modal-content d-grid p-0">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLabel">Minhas Habilidades</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                              <div className="d-grid gap-1">
                                <div>
                                  <h3 className="fw-light fs-5 mb-0"> Python</h3>
                                  <p className='mb-0 fw-light fs-6'>Extração de dados de documentos e imagens, estruturação e limpeza de dados, automação de POP, criação de dashboards, sistemas web.</p>
                                    <div className="progress opacity-50">
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100" style={{width: "98%"}}> </div>
                                      </div>
                                    </div>
                                    <div>
                                    <h3 className="fw-light fs-5 mb-0"> Html, Css, Javascript</h3>
                                    <p className='fw-light fs-6 mb-0'>Manuseio de interfaces com Bootstrap e Tailwind, webscraping com Selenium.</p>
                                      <div className="progress opacity-50">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
                                        </div>
                                      </div>
                                      <div>
                                        <h3 className="fw-light fs-5 mb-0"> Django</h3>
                                        <p className="fw-light fs-6 mb-0"> Criação de sistemas WEB complexos, com scripts lógicos e interativos.</p>
                                          <div className="progress opacity-50">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}></div>
                                            </div>
                                          </div>
                                          <div>
                                            <h3 className="fw-light fs-5 mb-0"> Next.JS</h3>
                                            <p className="fw-light fs-6 mb-0"> Criação de sites especializados em layout mobile.</p>
                                              <div className="progress opacity-50">
                                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                                </div>
                                              </div>
                                          </div>
                            <div>
                            <h3 className="fw-light fs-5">Extração de dados</h3>
                            <p className="fw-light fs-6 mb-0">Extração, limpeza, estruturação e manutenção de dados através de extrações automatizadas de fontes e formatos diversos - WEB, PDF, Imagens.</p>
                              <div className="progress opacity-50">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: "95%"}}></div>
                                </div>
                              </div>
                            <div>
                            <h3 className="fw-light fs-5 mb-0"> Manipulação de dados</h3>
                            <p className="fw-light fs-6 mb-0"> Criação de indicadores para tomada de decisão, business inteligence, teste de hipóteses e estátistica.</p>
                              <div className="progress opacity-50">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="97" aria-valuemin="0" aria-valuemax="100" style={{width: "97%"}}></div>
                                </div>
                              </div>
                              <div>
                                <h3 className="fw-light fs-5 mb-0"> Visualização de dados</h3>
                                <p className="fw-light fs-6 mb-0">Criação de dashboards para visualização de indicadores, business inteligence e sistemas de gerenciamento web.</p>
                                  <div className="progress opacity-50">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="99%" aria-valuemin="0" aria-valuemax="100" style={{width: "99%"}}></div>
                                    </div>
                                  </div>
                                  <div>
                                    <h3 className="fw-light fs-5 mb-0">Finanças Quantitativas</h3>
                                    <p className="fw-light fs-6 mb-0">Extração de dados diretos da CVM - Comissão de Valores Mobiliários, órgão regulador do Mercado de Capitais Brasileiro - simulação de Monte Carlo, VaR, Índice Sharpe, Treynor, Coeficiente Beta, CAPM, Markowitz, Backtesting, Matemática Financeira, Macroeconomia, Microeconomia, Econometria e Deriativos.</p>
                                    <div className="progress opacity-50">
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-label="Animated striped example" aria-valuenow="75%" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                                      </div>
                                    </div>
                                  </div>
                                  </div>
                                  <div className='border-top'></div>
                                  <div className="text-center d-grid gap-2 m-4">
                                    <button  type="button" className='btn' data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{color:'white',background:'#3770A0'}}>Sobre</button>  
                                    <button className="btn" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Gostei do seu site, como faço para ter um?')} style={{color:'white',background:'#3770A0'}}>Envie-me uma mensagem</button>
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
                          <div className='border-top'></div>
                          <div className="text-center d-grid gap-2 m-4">
                          <button className="btn" type="button" onClick={() => Router.push('https://tender-silica-d85.notion.site/Jove-py-a23ca3b771e345649f73c965803197d5')} style={{color:'white',background:'#3770A0'}}>Ver Notion</button>
                          <button className="btn" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')} style={{color:'white',background:'#3770A0'}}>Envie-me uma mensagem</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
    </div>
    <div className="d-grid gap-2 p-2">
        <button className="slide-in-blurred-left btn btn-outline-warning mt-4" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
      </div>
    </div>
    <p className="card-text text-center p-2" ><small style={{color:'white'}}>Criado por Jove.py</small></p>
    <div className='row'><br></br></div>
    </div>
    {/*footer padrao*/}          
    
    </div>
  
  )
}

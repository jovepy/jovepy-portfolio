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
    <div>      
      
      <div>
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
            ></NextSeo>
              <title >Rodrigo Jove - Jovepy - Portfólio</title>
              <meta charset="utf-8"></meta> 
              <meta name="description" content="Jovepy - Desenvolvedor Python e Graduando em Economia.
              Skills: Python | Django | Next.Js | Full-Stack | Business Intelligence | POP Automation"></meta>
              <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <meta name="google-site-verification" content="google-site-verification=bnN_n3HsuP0eIt9oTOemQAfy8CkVllyAxiTAFJqkim8" />
              <meta name="google-site-verification" content="google-site-verification=Gpy2hbxpjPq-doXi6-bIzFx75DxoGmNr-ADI1lMUwWk" />
          </Head>
      </div>

      <body>
      {/* Menu principal */}
      <div className='text-left p-2'>
      <nav>
        <div className="nav nav-pills nav-fill fixed-top p-2" id="nav-tab" role="tablist" style={{background:'white'}}>
        
        <style jsx>{`
                        .nav-pills .nav-link.active, .nav-pills .show>.nav-link, text {
                          color: #FFDC4E;
                          background-color: #3770A0;
                      }
                      
                      
                        
                      `}</style>
          
          <button className="nav-link active fs-6 fw-light  rounded-pill" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" >Início</button>
          <button className="nav-link fs-6 fw-light  rounded-pill" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" >Portfólio</button>
          <button className="nav-link fs-6 fw-light  rounded-pill" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" >Contato</button>
          
          {/* Menu lateral */}
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"  viewBox="0 0 16 16" style={{color:"#FFDC4E"}} className='animate-bounce w-10 h-7'>
              <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
            </svg>
          </button>
          <div style={{color:"dimgray"}}>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <div className='animate-bounce w-5 h-5'>
                  <h5 className="offcanvas-title fs-2" id="offcanvasNavbarLabel">Jove.py</h5>
                </div>
                <button className="navbar-toggler btn-close" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span className="navbar-toggler-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-indent" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8Z"/>
                    <path fillRule="evenodd" d="M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Z"/>
                  </svg>
                  </span>
                </button>
              </div>
            <div className="offcanvas-body text-center">
              <ul className="navbar-nav justify-content-end flex-grow-1 p-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Início</a>
                </li>
                <li className="nav-group-item">
                  <h5 className='h4 pb-2 mb-0 border-bottom text-muted'>Serviços Profissionais</h5>
                  <div className='list-group'>
                    <a className="nav-link" href="#">Automação de Processos</a>
                    <a className="nav-link" href="#">Site com foco em celulares</a>
                    <a className="nav-link" href="#">Análise de dados</a>
                  </div>
                  <div className='row'><br></br></div>
                  <h5 className='h4 pb-2 mb-0 border-bottom text-muted'>Projetos Públicos</h5>
                  <div className='list-group'>
                    <a className="nav-link" href="#">Empreenda</a>
                    <a className="nav-link" href="#">Opere com derivativos</a>
                    <a className="nav-link" href="#">Assessor Digital</a>
                    <a className="nav-link" href="#">Whatsapp Bot</a>
                  </div>
                </li>
              </ul>
              <div className='row'><br></br></div>
              
              {/*footer do menu de navegacao lateral*/}              
              <div className="text-center">
                <div className='row'>
                <div className='col'></div>
                  <div className='col' >
                    <div className='text-center'>
                    <div className='list-group list-group-horizontal text-center'>
                    <div className="m-2 p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" fill="currentColor" className="text-center bi bi-linkedin" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove/')}>
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </div>
                    
                    <div className="m-2 p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                      <svg  xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>
                    </div>
                    <div className="m-2 p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://github.com/jovepy')} >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    </div>
                    </div>
                    </div>
                    <button className="btn btn-outline-dark" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                  </div>
                <div className='col'></div>
                </div>  
            </div>         
            </div>  
            </div>
          </div>  
        </div>
        
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {/*Inicio*/}
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
      <div className='container-fuid'>
        <div className='row'><br></br></div> 
        <div className='text-center'>
        <svg className='python' width="200px" height="200px" viewBox="0 0 256 255" version="1.1">
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
    <div className='row'><br></br></div>
        </div>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 text-center p-4">  
            <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <Image className="img-fluid rounded-circle text-center p-2" loader={myLoader} src='./perfil.png' alt="Criamos a sua solulçao" width={250} height={250} /> 
            </div>
            </div>
            <div className="col-sm-8">
              <div className="card-body align-middle">
                <h5 className="text-start fs-1 fw-semibold" >Rodrigo Jovê</h5>
                  <p className="fw-light card-text text-start align-middle">
                  <ul className="list-group list-group-flush">
                      <li className="list-group list-group-flush">
                        <a type="button" className='list-group-item fs-4' data-bs-toggle="modal" data-bs-target="#exampleModal1">
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
                          <button type="button" className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Habilidades</button>
                          <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group list-group-flush">
                    <a type="button" className='list-group-item fs-4' data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                    <button  type="button" className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#exampleModal1">Sobre</button>  
                                    <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>                  
                        </li>
                  <li className="list-group list-group-flush">
                    <a type="button" className='list-group-item fs-4' data-bs-toggle="modal" data-bs-target="#exampleModal2">Caderno</a>
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
                          <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://tender-silica-d85.notion.site/Jove-py-a23ca3b771e345649f73c965803197d5')}>Ver Notion</button>
                          <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
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
      
      <div className="accordion accordion-flush p-4-sm" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              POP Automation
            </button> 
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Automatize um Processo Operacional Padrão, ganhe eficiencia e reduza custos.</div>
            <div className='text-right'>
            <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('#')}>conhecer serviço</button>
              <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá, gostaria de saber mais informações sobre o serviço de POP Automation')}>Envie-me uma mensagem</button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Site Mobile
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Tenha um site responsivo, seja encontrado no google e atinja muitos clientes.</div>
            <div className='text-right'>
              <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('#')}>conhecer serviço</button>
              <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá, gostaria de saber mais informações sobre o serviço de Site Mobile')}>Envie-me uma mensagem</button>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed fs-4 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Business Inteligence
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Descubra informações sobe o seu negócio e tome decisões acertivas.</div>
            <div className='text-right'>
            <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('#')}>conhecer serviço</button>
              <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá, gostaria de saber mais informações sobre o serviço de Business Inteligence')}>Envie-me uma mensagem</button>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className='h4 pb-2 mb-4 border-bottom text-muted p-2'> Projetos Open-Source </h2>   
      
      <div className='p-2'>
      <div id="carouselExampleIndicatorsdark" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicatorsdark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicatorsdark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicatorsdark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div className="card">
        <div className="card-header" style={{background:'#3770A0'}}>
          <div className='row'>
            Último update
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Assessor digital</h5>
          <p className="card-text">Descubra o melhor investimento possível baseado em dados. Conquiste o maior retorno sobre rico possível da série histórica da CMV.</p> 
          <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('#')}>ver projeto</button>
        </div>
      </div>
          </div>
          <div className="carousel-item">
          <div className="card">
        <div className="card-header" style={{background:'#3770A0'}}>
          Último update 
        </div>
        <div className="card-body">
          <h5 className="card-title">Assessor digital</h5>
          <p className="card-text">Descubra o melhor investimento possível baseado em dados. Conquiste o maior retorno sobre rico possível da série histórica da CMV.</p>
          <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('#')}>ver projeto</button>
        </div>
      </div>
          </div>
          <div className="carousel-item">
          <div className="card">
        <div className="card-header" style={{background:'#3770A0'}}>
          Último update 
        </div>
        <div className="card-body">
          <h5 className="card-title">Assessor digital</h5>
          <p className="card-text">Descubra o melhor investimento possível baseado em dados. Conquiste o maior retorno sobre rico possível da série histórica da CMV.</p>
          <button className="btn btn-outline-warning m-2" type="button" onClick={() => Router.push('#')}>ver projeto</button>
        </div>
      </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicatorsdark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicatorsdark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div> 
        <div className='row'><br></br></div>
      </div>
      
    </div>
    {/*portfolio*/}
    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tableIndex="0">
        <div className="row">            
          <div className='container-fluid p-4'>
        
          <div className="row">
          <div className="card text-center">
            <div className="card-header">
              Ideias fazem a diferença, realizá-las mais ainda.
            </div>
            <div className="card-body">
              <h5 className="card-title">O que você vai encontrar aqui?</h5>
              <p className="card-text">Esse portfólio é dividido em duas seções, <b>serviços e projetos</b>. Na primeira seção você encontrará os <b>serviços profissionais</b> desenvolvidos por mim, já na segunda, <b>projetos abertos à população</b>.</p>
            </div>
            <div className="card-footer text-muted">
              Jove.py - Portfólio
            </div>
          </div>
          
  <div className="col-sm-4 text-center text-truncate">
  <div className='row'><br></br></div>
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Serviços</a>
      <a className="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Projetos</a>

    </div>
  </div>
  <div className="col-sm-7 text-start align-middle">
    <div className="tab-content" id="nav-tabContent">      
      <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
      
      <div className='row'><br></br></div>
      <div className="list-group">
      <Link href="/automacaopy">
        <a className="list-group-item list-group-item-action" aria-current="true">
        
        
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Automação de Processos Operacionais</h5>
            <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg></small>
          </div>
          <p className="mb-1">Identifique informações e as insira em sistemas automaticamente</p>
          <small>PDFs, imagens, papéis e sites</small>
        </a>
        </Link>
        <Link href='automacaopy'>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Sites com foco em celulares</h5>
            <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg></small>
          </div>
          <p className="mb-1">Tenha um site focado em mobile e alcance mais pessoas</p>
          <small className="text-muted">sites com layout específicos para mobile</small>
        </a>
        </Link>
        <Link href="/automacaopy">
        <a className="list-group-item list-group-item-action" aria-current="true">        
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Análise de dados</h5>
            <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg></small>
          </div>
          <p className="mb-1">Criação de Dashboards que dão suporte a tomada de</p>
          <small>Gere indicadores e tome decisões acertivas</small>
        </a>
        </Link>
      </div>
      

                  
      </div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
      <div className='row'><br></br></div>
      <div className="list-group">
        <a href="https://jovepy.github.io/empreenda/" className="list-group-item list-group-item-action" aria-current="false">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Empreenda</h5>
            <small className="text-muted">Updated <relative-time datetime="2022-05-18T22:50:41Z" className="no-wrap" title="18 de mai. de 2022 19:50 BRT">on 18 May</relative-time></small>
          </div>
          <p className="mb-1"><p className="col-9 d-inline-block color-fg-muted mb-2 pr-4" itemProp="description">
          Microestrutura de serviços úteis a qualquer empreendedor com baixo capital
        </p></p>
        </a>
        <a href="https://github.com/jovepy/Opere-com-derivativos" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Opere com derivativos</h5>
            <small className="text-muted">Updated <relative-time datetime="2022-06-22T00:08:25Z" className="no-wrap" title="21 de jun. de 2022 21:08 BRT">on 21 Jun</relative-time></small>
          </div>
          <p className="mb-1"><p className="col-9 d-inline-block color-fg-muted mb-2 pr-4" itemProp="description">
          Estruture os dados contidos no BDI e encontre as opções mais baratas em relação ao modelo de Black-Scholes
        </p></p>
        </a>
        <a href="https://github.com/jovepy/whatsapp-bot" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Chatboot de Whatsapp</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1"><p className="col-9 d-inline-block color-fg-muted mb-2 pr-4" itemProp="description">
          whatsapp bot com selenium e python
        </p></p>
        </a>
        <a href="https://github.com/jovepy/Assessor-Digital" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Assessor Digital de Investimentos</h5>
            <small className="text-muted">3 days ago</small>
          </div>
          <p className="mb-1"><p dir="auto">Descubra fundos de investimentos com a maior rentabilidade sobre risco</p></p>
        </a>
      </div>

      </div>
            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
      <div className='row'><br></br></div>
      <p> <b type="button" onClick={() => Router.push('https://drive.google.com/file/d/1AjsH_WpHDTAfC8Gi2x2qvUKv3Amr-GJP/view?usp=sharingy')}> Clique aqui</b> para visualizar nosso contrato padrão.</p>  
      </div>

      
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
        {/*contato*/}
        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tableIndex="0">
          
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          
          <div className='position-relative top-50 start-50 translate-middle text-center'>
          <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
          </div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          <div className='row'><br></br></div>
          

        </div>


      </div>

      {/*footer padrao*/}
      <footer className='text-center'>
      
      <style jsx>{`
                        svg {
                          color: white;
                        } 
                        
                      `}</style>
      <div className="card" style={{background: "#3770A0"}}>
        <div className="card-body">
        <div className='grid grid-cols-1 gap-1 place-items-center h-32'>
        <div className='row'><br></br></div>
              <div className="container text-center">
                <div className='row'>
                  <div className='col text-center'>
                    <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="60" height="60" fill="currentColor" className="bi bi-linkedin m-4" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove/')}>
                    
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    </div>
                  </div>
                  <div className='col'>
                  <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-whatsapp m-4" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                      </div>
                  </div>
                  <div className='col'>
                  <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-github m-4" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://github.com/jovepy')} >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>   
                    </div>
                    <div className='row'><br></br></div>               
                    </div>
                    </div>
                    
        </div>
      </div>     
      </div>
      </div>
      </footer>
      
    </div>
    <p className="card-text text-center"><small className="text-muted">Criado por Jove.py</small></p>
    </body>

    </div>
  )
}

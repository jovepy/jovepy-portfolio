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
      <Image className="img-fluid text-center" loader={myLoader} src='./python.svg' alt="Criamos a sua solulçao" width={150} height={50} />
    </div>
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="offcanvas offcanvas-end border-0 text-center" style={{opacity:'90%'}} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
          <div className="offcanvas-header content_bg_bar">
            <h5 className="offcanvas-title fs-1 fw-bolder" id="offcanvasNavbarLabel" style={{opacity:'70%'}}>Jove.py</h5>
            
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" style={{background:'#3770A0'}}>
            <ul className="navbar-nav justify-content-end flex-grow-2 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}><h5 className='text-start fs-4'>Inicio</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-4'>Serviços</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-4'>Projetos</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-4'>Artigos</h5></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{color:'white'}}><h5 className='text-start fs-4'>Contato</h5></a>
              </li>
            </ul>
            
            <div className='container text-center'>
            <div className="grid grid-cols-1 gap-1 place-items-center h-32">
                <div className="btn-group text-center" role="group">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" fill="currentColor" className="bi bi-linkedin m-2" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove/')} style={{color:'white'}}>
                    
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  
                  <svg  xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-whatsapp m-2" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')} style={{color:'white'}}>
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>

                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-github m-2" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://github.com/jovepy')} style={{color:'white'}}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>  
              </div>
            </div>
              
            </div>
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
            <Image className="img-fluid rounded-circle text-center" loader={myLoader} src='./perfil.svg' alt="Criamos a sua solulçao" width={200} height={200} /> 
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
                          <div className="modal-footer">
                          <div className='border-top'></div>
                          <div className="text-center d-grid gap-2 m-4">
                          <button className="btn" type="button" onClick={() => Router.push('https://tender-silica-d85.notion.site/Jove-py-a23ca3b771e345649f73c965803197d5')} style={{color:'white',background:'#3770A0'}}>Ver Notion</button>
                          <button className="btn" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')} style={{color:'white',background:'#3770A0'}}>Envie-me uma mensagem</button>
                          </div>
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
    <div><br></br></div>
    <div><br></br></div>
    <div><br></br></div>
    <p className="card-text text-center"><small style={{'color':'white'}}>Criado por Jove.py</small></p>
    <div><br></br></div>
    <div><br></br></div>
    </div>
  
  )
}

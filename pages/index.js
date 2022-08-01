import 'bootstrap/dist/css/bootstrap.css';
import 'reactjs-popup/dist/index.css';
import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import Head from 'next/head'


const myLoader = ({ src, width, quality }) => {
  return `./${src}?w=${width}&q=${quality || 75}`
}

export default function Home() {
  return (
    <div>
      <div>
          <Head>        
          
            <title >Jovepy - Portfólio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <meta charset="utf-8"></meta> 
              <meta name="robots" content="index,follow"></meta>
              <meta name="googlebot" content="index,follow"></meta>
          
          
          </Head>
      </div>
      <body>
      <div className='text-left p-2'>
      
      <nav>
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Início</button>
          <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Portfólio</button>
          <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contato</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">        
        <div className='row'><br></br></div> 
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4 text-center">
            <div className='row'><br></br></div>
            <div className='row'><br></br></div>
            <Image className="img-fluid rounded-circle text-center" loader={myLoader} src='./perfil.jpg' alt="Criamos a sua solulçao" width={150} height={150} />  
            </div>
            <div className="col-sm-8">
              <div className="card-body align-middle ">
                <h5 className="card-title text-start p-4">Rodrigo Jovê</h5>
                <p className="fw-light card-text text-start align-middle">
                <ul className="list-group list-group-flush">
                  <li className="list-group list-group-flush">
                  <a type="button" className='list-group-item' data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}></div>
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
                          <button  type="button" className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#exampleModal1">
                          Sobre
                          </button>  
                          <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                          
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  
                    </li>
                  
                    <li className="list-group list-group-flush">
                  <a type="button" className='list-group-item' data-bs-toggle="modal" data-bs-target="#exampleModal1">
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
                          <button type="button" className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">
                      Habilidades
                    </button>
                    <button className="btn btn-outline-primary" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>Envie-me uma mensagem</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    </li>


                    <li className="list-group list-group-flush">
                  <a type="button" className='list-group-item' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                      Caderno
                    </a>
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
            </div>
          </div>
          </div>
        </div>
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
        <a href="/automacaopy" className="list-group-item list-group-item-action" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Automação de Processos Operacionais</h5>
            <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg></small>
          </div>
          <p className="mb-1">Identifique informações e as insira em sistemas automaticamente</p>
          <small>PDFs, imagens, papéis e sites</small>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Sites com foco em celulares</h5>
            <small><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg></small>
          </div>
          <p className="mb-1">Tenha um site focado em mobile e alcance mais pessoas</p>
          <small className="text-muted">sites com layout específicos para mobile</small>
        </a>
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
          <p className="mb-1"><p class="col-9 d-inline-block color-fg-muted mb-2 pr-4" itemprop="description">
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


      <footer className='text-center'>
      <style jsx>{`
                        svg {
                          color: white;
                        } 
                      `}</style>
      <div className="card bg-primary">
        <div className="card-body">
          
        <div className='row'><br></br></div>
              <div className="container text-center">
                <div className='row'>
                  <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg"  width="60" height="60" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://www.linkedin.com/in/rodrigojove/')}>
                    
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                  <div className='col'>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://api.whatsapp.com/send?phone=+5583998775808&text=Olá!!')}>
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
                  </div>
                  <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" type="button" onClick={() => Router.push('https://github.com/jovepy')} >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>   
                    <div className='row'><br></br></div>               
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

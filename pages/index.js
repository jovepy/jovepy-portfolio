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
    <body>
    <div className= 'shadow-lg p-3 mb-5 bg-warning bg-gradient rounded'>      
    <ul className="nav nav-pills nav-fill fs-5" id="pills-tab" role="tablist" style={{opacity:'75%'}}>    
      <li className="nav-item" role="presentation" >
        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Inicio</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Artigos</button>
      </li>
      <li className="nav-item dropdown" role="presentation">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Serviços
          </a>
          <ul className="dropdown-menu dropdown-menu shadow p-3 mb-5 bg-body rounded" style={{background:'white'}}>
            <li><button className="nav-link" id="pills-pop-tab" data-bs-toggle="pill" data-bs-target="#pills-pop" type="button" role="tab" aria-controls="pills-pop" aria-selected="false">POP Automation</button></li>
            <li><button className="nav-link" id="pills-scraping-tab" data-bs-toggle="pill" data-bs-target="#pills-scraping" type="button" role="tab" aria-controls="pills-scraping" aria-selected="false">Web Scraping</button></li>
            <li><button className="nav-link" id="pills-mobile-tab" data-bs-toggle="pill" data-bs-target="#pills-mobile" type="button" role="tab" aria-controls="pills-mobile" aria-selected="false">Site Mobile</button></li>
            <li><button className="nav-link" id="pills-bi-tab" data-bs-toggle="pill" data-bs-target="#pills-bi" type="button" role="tab" aria-controls="pills-bi" aria-selected="false">Business Inteligence</button></li>
          </ul>        
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contato</button>
      </li>
      
    </ul>
    </div>
    <div className="tab-content" id="pills-tabContent">
      {/* INICIO */}
      <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
            <div className='container-fluid text-center'>
              <div className='text-center'>
                <svg className='python' style={{opacity:'75%'}} width="200px" height="200px" viewBox="0 0 256 255" version="1.1" >
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
        </div>        
      </div>     
      {/* FIM INICIO */}
      <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">Contato</div>
      <div className="tab-pane fade" id="pills-pop" role="tabpanel" aria-labelledby="pills-pop-tab" tabIndex="0">teste</div>
      <div className="tab-pane fade" id="pills-scraping" role="tabpanel" aria-labelledby="pills-scraping-tab" tabIndex="0">teste2</div>
      <div className="tab-pane fade" id="pills-mobile" role="tabpanel" aria-labelledby="pills-mobile-tab" tabIndex="0">teste3</div>
      <div className="tab-pane fade" id="pills-bi" role="tabpanel" aria-labelledby="pills-bi-tab" tabIndex="0">teste4</div>
      <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">Artigos</div>
    </div>
    </body>
    </div>
  )
}

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import 'reactjs-popup/dist/index.css';
import { useEffect } from "react";
import anime from '../node_modules/animejs/lib/anime.es.js';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");  
    const anime = require('animejs');}, []);



  return <Component {...pageProps} />;
}

export default MyApp;
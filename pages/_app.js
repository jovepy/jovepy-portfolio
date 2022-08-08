import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'reactjs-popup/dist/index.css';
import { useEffect } from "react";
import '../styles/jornal.css'
import '../styles/python.css'
import '../node_modules/animate.css/animate.css'
import '../node_modules/animate.css/animate.min.css'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("animate.css/animate.min.css");
    }, []);

    
  

  return <Component {...pageProps} />;
}

export default MyApp;
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'reactjs-popup/dist/index.css';
import { useEffect } from "react";
import '../styles/jornal.css'
import '../styles/python.css'
import '../styles/barskils.css'


function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    
  

  return <Component {...pageProps} />;
}

export default MyApp;
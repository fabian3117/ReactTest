import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Prueba from './Prueba';
import TestClass from './TestClass';
import BarraSuperior from './BarraSuperior';
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/all';
import logo from './logo.svg';
import ControladorChips from './ControladorChips';
import TopBar from './TopBar';
import Card from './Card';
import './Card.css';
import FloatingButton from './FloatingButton';
import ParteInferior from './ParteInferior.js';
import { FaGithub, FaLinkedin , FaFileDownload } from 'react-icons/fa';

let DireccionBase="http://localhost:8080/listadoProyecto";

const root = ReactDOM.createRoot(
  document.getElementById('root')
  );

  function renderApp(apiData) {
    ReactDOM.render(
      <React.StrictMode>
        <App apiData={apiData} />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };
root.render(
  <React.StrictMode>
     <div className="contenedor-vertical">
    <TopBar />
    <Prueba></Prueba>
    <div className="contenedor-horizontal">
    <div className="card-container">
    <Card
        direcion="http://localhost:8080/infoProyect/1"></Card>
    <Card
        direcion="http://localhost:8080/infoProyect/2"></Card>
        <Card
        direcion="http://localhost:8080/infoProyect/1"></Card>
        <Card
        direcion="http://localhost:8080/infoProyect/1"></Card>
        </div>
        </div>
    </div>

    <br></br>
    <md-divider></md-divider>
    <br></br>

    <div className="container">
  <h1>Enlaces</h1>
  <md-filled-tonal-button>
    <FaFileDownload/>
    <span>Descargar CV</span>
  </md-filled-tonal-button>
  <md-filled-tonal-button>
  <FaGithub />
    <span>GitHub</span>
  </md-filled-tonal-button>
  <md-filled-tonal-button>
  <FaLinkedin />
    <span>LinkedIn</span>
  </md-filled-tonal-button>
</div>



<ParteInferior></ParteInferior>


<FloatingButton></FloatingButton>
  </React.StrictMode>
);
function saludo(){
  console.log("as");
  
  DireccionBase="ss";
  
}
//setInterval(TestClass, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

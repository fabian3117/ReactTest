import React,{Component } from "react";
import logo from './logo.svg';
import  './Generales.css';

//let DireccionBase="";
class ParteInferior extends Component{
constructor(props){
    super(props);
    this.state = {
        DireccionBase: 'Dirección Inicial',
        Estudios:true,
      };
}
saludo = () => {
    // Actualiza el estado para mostrar la nueva dirección
    console.log("as");
    if(this.Estudios!=false){
        this.setState({
            DireccionBase: (
              <div className="container">
                <ul>
                  <li><strong>Ingeniería Electrónica</strong><br />UTN F.R.B.A (En curso)</li>
                  <li><strong>Técnico electromecánico</strong><br />E.E.T.N°1 (Secundario Técnico)<br />Egresado 2017</li>
                </ul>
                <ul>
                  <li><strong>Programador Java & Full Stack</strong><br />GCBA - UTN & INTI<br />2017</li>
                </ul>
                <ul>
                  <li><strong>Manejo de sistema Linux</strong><br />2018<br />REDHAT</li>
                  <li><strong>Manejo Microsoft Office</strong><br />2018<br />COURSERA</li>
                  <li><strong>Soporte IT</strong><br />Estructura y funcionamiento de redes<br />2019<br />COURSERA & GOOGLE</li>
                </ul>
              </div>
            )
          });
          this.setState({
            Estudios:false,
          });
    
    }
    else{
        this.setState({
            DireccionBase: (
              <div className="container">
                <a>as</a>
              </div>
            )
          });
        this.setState({
            Estudios:true,
          });

    }
  };
render(){
    return(<div>
        <div className="contenedor-horizontal">
    <div className="card-container">
    <div className="container">
    <h1>Academico</h1>
  <ul>
    <li>
      <strong><i className="fas fa-graduation-cap"></i> Ingeniería Electrónica</strong><br />
      UTN F.R.B.A (En curso)
    </li>
    <li>
      <strong><i className="fas fa-certificate"></i> Técnico electromecánico</strong><br />
      E.E.T.N°1 (Secundario Técnico)<br />
      Egresado 2017
    </li>
  </ul>
  <ul>
    <li>
      <strong><i className="fas fa-laptop-code"></i> Programador Java & Full Stack</strong><br />
      GCBA - UTN & INTI<br />
      2017
    </li>
  </ul>
  <ul>
    <li>
      <strong><i className="fas fa-linux"></i> Manejo de sistema Linux</strong><br />
      2018<br />
      REDHAT
    </li>
    <li>
      <strong><i className="fas fa-file-word"></i> Manejo Microsoft Office</strong><br />
      2018<br />
      COURSERA
    </li>
    <li>
      <strong><i className="fas fa-desktop"></i> Soporte IT</strong><br />
      Estructura y funcionamiento de redes<br />
      2019<br />
      COURSERA & GOOGLE
    </li>
  </ul>
</div>
</div>
              <div className="card-container">
              <div className="container">
  <h1>Tecnologías</h1>
  <ul>
    <li>
      <strong><i className="fas fa-coffee"></i> Java</strong><br />
      Experiencia en Spring Boot y Android.<br />
      Herramientas: IntelliJ, Android Studio
    </li>
    <li>
      <strong><i className="fas fa-cogs"></i> C</strong><br />
      Programación en entorno Linux.
    </li>
    <li>
      <strong><i className="fas fa-microchip"></i> C++</strong><br />
      Programación de microcontroladores.<br />
      Plataforma: MCUExpress NXP
    </li>
  </ul>
  <ul>
    <li>
      <strong><i className="fas fa-database"></i> MySQL y NoSQL</strong>
    </li>
    <li>
      <strong><i className="fab fa-git"></i> Git - GitAction</strong>
    </li>
    <li>
      <strong><i className="fab fa-microsoft"></i> Azure Web Service</strong>
    </li>
  </ul>
</div>
<br/>
<div className="container">
  <h1>Experiencia Laboral</h1>
  <ul>
    <li>
      <strong><i className="fas fa-briefcase"></i> Programador Back-End</strong><br />
      Ministerio de Educación del Gobierno de la Ciudad de Buenos Aires
      <br />
      <span className="TextSecundario">Julio/2023 - Actual</span>
      <br />
      Descripción del trabajo:
      <ul>
        <li>Programador BackEnd</li>
        <li>Encargado del mantenimiento de proyectos existentes</li>
        <li>Planificación y ejecución de proyectos nuevos</li>
      </ul>
    </li>
  </ul>
</div></div></div></div>);
}
}
export default ParteInferior;
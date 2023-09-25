import React,{ useEffect, useState } from "react";
import  './Card.css';
import Modal from "react-modal";
import axios from 'axios';

const DireccionBase="http://localhost:8080/infoProyect/1";

class Card extends React.Component{
constructor(props){
super(props);
this.state = {
    modalIsOpen: false,
    textoModal:"Aca mostramos descripcion del proyecto",
    imagen:"",
    titulo:"",
    descripcion:"",
    repo:"",
    dataObten:false,
    direcion:props.direcion
  };
}
openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

 
  componentDidMount() {
    // setInterval(this.handleClick, 1000);
    axios.get(this.state.direcion).then(response=>{
      console.log(response.data.nameProyect);
      this.setState({
        title:response.data.nameProyect,
        description:response.data.descriptionProyect,
        imageSrc:"response.data.linkToImg",
        repo:response.data.linkToRepo,
      });
    }).catch(
      console.log("error")
    );

   }

render(){
    return(
    
    <div className="card">


    <img src={this.state.imageSrc} alt={this.props.altText} className="card-image" />
    <div className="card-content" onClick={this.openModal}>
      <h2 className="card-title">{this.state.title}</h2>
      <p className="card-description">{this.state.description}</p>
      <button className="ButtonPersonalizado" value={this.state.repo}>Ver Repositorio</button>
      <div className="icon-container">
      
      </div>
    </div>
<Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Ejemplo de Modal"
        >
            <h2>Ejemplo de Modal</h2>
          <p>{this.state.TextoModal}</p>
          <button className="ButtonPersonalizado" value={this.props.repo}>Ver Repositorio</button>
          <br></br>
          <button onClick={this.closeModal}>Cerrar Modal</button>
        </Modal>
    </div>);
}




}
export default Card;
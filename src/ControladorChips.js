import React, { Component } from "react";

const DireccionBase = "http://localhost:8080/";

class ControladorChips extends Component {
  constructor(props) {
    super(props);

    // Inicializamos el estado con un array vacío
    this.state = {
      valores: [],
    };
  }

  componentDidMount() {
    // Hacemos una solicitud fetch para obtener datos del servidor
    fetch(DireccionBase+"Descripcion", {
      method: "GET",
      mode: "no-cors"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
        return response.json(); // Supongo que la respuesta es un JSON, si no lo es, ajusta esto
      })
      .then((data) => {
        console.log(data);
        // Actualizamos el estado con los datos recibidos
       // this.setState({ valores: data });
      })
      .catch((error) => {
        console.error("Error:", error); // Manejamos errores de la solicitud
      });
  }

  renderChips() {
    // Mapeamos los valores en el estado para crear elementos JSX
    return this.state.valores.map((valor, index) => (
      <md-suggestion-chip label={valor} key={index}></md-suggestion-chip>
    ));
  }

  render() {
    return <div>{this.renderChips()}</div>;
  }
}

export default ControladorChips;

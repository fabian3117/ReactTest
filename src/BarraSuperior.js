import React from "react";
const DireccionBase="http://localhost:8080/";
class BarraSuperior extends React.Component{
    constructor(props){
        super(props);
        fetch(DireccionBase, {
            method: "GET"
          })
            .then(response => {
              if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
              }
              return response.text(); // o response.json() si esperas una respuesta JSON
            })
            .then(data => {
              console.log(data); // Aquí puedes manejar la respuesta exitosa
            })
            .catch(error => {
              console.error("Error:", error); // Aquí puedes manejar errores de la solicitud
            });
    }

    render(){
 return (<a>ts</a>);
    };
}
export default BarraSuperior;
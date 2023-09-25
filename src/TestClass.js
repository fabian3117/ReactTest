import React from 'react';

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      comment: 'Hello'
    };
    // Enlazar handleClick al contexto actual de la instancia de TestClass
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Hola");
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
   // setInterval(this.handleClick, 1000);
  }

  componentWillUnmount() {
    // Limpia el intervalo cuando el componente se desmonta
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div>
        <a>Prueba desde clase</a>
        <br></br>
        <a onClick={this.handleClick}>{this.props.name}</a>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default TestClass;

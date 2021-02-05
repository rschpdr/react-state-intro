import React from "react";

class Counter extends React.Component {
  // O state sempre é um atributo que recebe um objeto literal
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // Cada vez que nós invocamos o método setState, o React invoca novamente o método render, fazendo o random() gerar um novo número aleatório em cada renderização
    // console.log(Math.random());

    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span style={{ padding: "1rem" }}>{this.state.count}</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;

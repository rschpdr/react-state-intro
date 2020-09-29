import React from "react";

class Counter extends React.Component {
  // State inicial
  state = {
    count: 0,
  };

  // Usamos arrow function aqui porque arrow functions nao criam um novo, entao o this vai se referir a classe

  // Metodo a ser executado quando o usuario clica no botao de +
  onIncrement = () => {
    // Atualizando o state utilizando o valor anterior do state atraves da funcao callback de setState
    this.setState((previousState) => {
      return { count: previousState.count++ };
    });
  };

  // Metodo a ser executado quando o usuario clica no botao de -
  onDecrement = () => {
    this.setState((previousState) => ({ count: previousState.count-- }));
  };

  render() {
    return (
      <div>
        {/* Passando referencia do metodo pra ser executado quando o evento click acontecer */}
        <button onClick={this.onDecrement}>-</button>
        <span style={{ padding: "10px" }}>{this.state.count}</span>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;

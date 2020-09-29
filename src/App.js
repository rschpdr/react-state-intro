import React from "react";

class App extends React.Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // Executa essa funçāo assim que esse componente for renderizado na tela
  componentDidMount() {
    this.updateState();
  }

  // Metodo pra atualizar o state
  updateState() {
    // A cada 1 segundo, atualiza o state para o horario atual
    setInterval(() => {
      // So podemos atualizar state no React atraves da funcao setState
      this.setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });
    }, 1000);
  }

  // Metodo responsavel por retornar o JSX do componente
  render() {
    return (
      <div className="container">
        <h1> Are you React-ing Ironhackers?</h1>
        <h3>
          Time now is:
          {" " + this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </h3>
      </div>
    );
  }
}

export default App;
// module.exports = App;

import React, { useState, useEffect } from "react";

import Counter from "./Counter";

// React Hooks

// Hooks permitem componentes funcionais que antes so podiam ser de apresentaçāo passar a ter state

function App() {
  const [state, setState] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Executa essa funçāo assim que esse componente for renderizado na tela
  useEffect(() => updateState(), []);

  // Metodo pra atualizar o state
  function updateState() {
    // A cada 1 segundo, atualiza o state para o horario atual
    setInterval(() => {
      // So podemos atualizar state no React atraves da funcao setState
      setState({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });
    }, 1000);
  }

  return (
    <div className="container">
      <h1> Are you React-ing Ironhackers?</h1>
      <h3>
        Time now is:
        {" " + state.hours}:{state.minutes}:{state.seconds}
      </h3>

      <Counter />
    </div>
  );
}

export default App;
// module.exports = App;

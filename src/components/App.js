import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Counter";
import Dropdown from "./dropdown/Dropdown";
import Form from "./forms/Form";

class App extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <Counter />
        <Dropdown />
        <div className="mt-5">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
// module.exports = App;

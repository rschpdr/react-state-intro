import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  state = {
    show: false,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button className="drop-button" onClick={this.handleClick}>
          ▼
        </button>

        <ul className={`dropdown ${this.state.show ? "show" : ""}`}>
          <li>
            <a href="">Options</a>
          </li>
          <li>
            <a href="">Preferences</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;

import React from "react";

import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";

class Form extends React.Component {
  state = {
    email: "",
    password: "",
    description: "",
    rememberMe: false,
    bootcamp: "Web Dev",
    campus: "São Paulo",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state);

    return (
      <form>
        {/* Input email */}
        <TextInput
          label="Email address"
          type="email"
          id="email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
          subtitle="We'll never share your email with anyone else."
        />

        {/* Input Password */}
        <TextInput
          label="Password"
          type="password"
          id="exampleInputPassword1"
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        {/* Input Description */}
        <TextAreaInput
          label="Description"
          className="form-control"
          id="exampleInputDescription"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
        />

        {/* Input Remember me */}
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={this.state.rememberMe}
            onChange={() => {
              this.setState({ rememberMe: !this.state.rememberMe });
            }}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        {/* Input Bootcamp */}
        <div className="form-group form-check">
          <h4>Choose your bootcamp</h4>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="bootcamp"
              id="inlineRadio1"
              checked={this.state.bootcamp === "Web Dev"}
              value="Web Dev"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Web Dev
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="bootcamp"
              id="inlineRadio2"
              checked={this.state.bootcamp === "UX/UI"}
              value="UX/UI"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              UX/UI
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="bootcamp"
              id="inlineRadio3"
              checked={this.state.bootcamp === "Data Analytics"}
              value="Data Analytics"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Data Analytics
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Campus</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="campus"
            value={this.state.campus}
            onChange={this.handleChange}
          >
            <option value="sao_paulo">São Paulo</option>
            <option value="miami">Miami</option>
            <option value="mexico_city">Mexico City</option>
            <option value="lisbon">Lisbon</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;

import React from "react";

function TextAreaInput(props) {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputDescription">{props.label}</label>
      <textarea
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      >
        {props.value}
      </textarea>
    </div>
  );
}

export default TextAreaInput;

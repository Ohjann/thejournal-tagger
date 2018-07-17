import Radium from "radium";
import React, { Component } from "react";
import Label from "./Label";

const style = {
  form: {
    float: "left",
    "margin-left": "1em",
    "font-size": "0.8em"
  },
  div: {
    "white-space": "nowrap"
  },
  input: {
    height: "25px",
    padding: "0 5px",
    "vertical-align": "top",
    "box-shadow": "none",
    "border-right": "none"
  },
  submit: {
    height: "27px",
    width: "48px",
    background: "rgb(70, 209, 96)",
    border: "none",
    color: "white",
    "text-transform": "uppercase",
    "font-weight": "bold",
    "word-break": "break-all"
  }
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { showInput } = this.state;
    this.setState({
      showInput: !showInput
    });
  }

  render() {
    const { showInput } = this.state;
    return (
      <form style={[style.form]}>
        <Label handleClick={this.handleClick} />
        {showInput && (
          <div style={[style.div]}>
            <input style={[style.input]} type="text" />
            <input type="submit" style={[style.submit]} value="Save" />
          </div>
        )}
      </form>
    );
  }
}

export default Radium(Form);

import Radium from "radium";
import React, { Component } from "react";
import label from "../label.svg";

const style = {
  width: "25px",
  "border-radius": "unset",
  "margin-left": "-7px",
  cursor: "pointer"
};

class Label extends Component {
  render() {
    return <img style={[style]} src={label} alt="label" />;
  }
}

export default Radium(Label);

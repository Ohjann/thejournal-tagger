import Radium from "radium";
import React, { Component } from "react";

const style = {
  height: "25px",
  padding: "0 5px",
  "vertical-align": "top",
  "box-shadow": "none",
  "border-right": "none"
};

class Input extends Component {
  render() {
    return <input style={[style]} type="text" />;
  }
}

export default Radium(Input);

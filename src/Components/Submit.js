import Radium from "radium";
import React, { Component } from "react";

const style = {
  height: "27px",
  width: "48px",
  background: "rgb(70, 209, 96)",
  border: "none",
  color: "white",
  "text-transform": "uppercase",
  "font-weight": "bold",
  "word-break": "break-all"
};

class Submit extends Component {
  render() {
    return <input type="submit" style={[style]} value="Save" />;
  }
}

export default Radium(Submit);

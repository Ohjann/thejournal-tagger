/* global browser */
import Radium from "radium";
import React, { Component } from "react";

const style = {
  width: "25px",
  "border-radius": "unset",
  "margin-left": "-7px",
  cursor: "pointer"
};

class Label extends Component {
  render() {
    return (
      <img
        style={[style]}
        src={browser.extension.getURL("label.svg")}
        alt="label"
      />
    );
  }
}

export default Radium(Label);

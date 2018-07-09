import Radium from "radium";
import React, { Component } from "react";
import Input from "./Input";
import Label from "./Label";
import Submit from "./Submit";

const style = {
  float: "left",
  "margin-left": "1em",
  "font-size": "0.8em"
};

class Form extends Component {
  render() {
    return (
      <form style={[style]}>
        <Label />
        <Input />
        <Submit />
      </form>
    );
  }
}

export default Radium(Form);

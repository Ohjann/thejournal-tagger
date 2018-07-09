import Radium from "radium";
import React, { Component } from "react";
import Input from "./Input";
import Label from "./Label";
import Submit from "./Submit";

const style = {
  form: {
    float: "left",
    "margin-left": "1em",
    "font-size": "0.8em"
  },
  div: {
    "white-space": "nowrap"
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
            <Input />
            <Submit />
          </div>
        )}
      </form>
    );
  }
}

export default Radium(Form);

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
  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    };
  }

  handleClick() {
    console.log("click");
    this.setState(prev => ({ showInput: !prev.showInput }));
  }

  render() {
    const { showInput } = this.state;
    return (
      <form style={[style]}>
        {!showInput && <Label handleClick={this.handleClick} />}
        {showInput && (
          <div>
            <Input />
            <Submit />
          </div>
        )}
      </form>
    );
  }
}

export default Radium(Form);

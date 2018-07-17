/* global browser */
import Radium from "radium";
import React, { Component } from "react";
import Label from "./Label";
import style from "./style";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      value: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    const { showInput } = this.state;
    this.setState({
      showInput: !showInput
    });
  }

  handleSubmit(event) {
    const { value } = this.state;

    browser.runtime
      .sendMessage({
        request: "storeLabel",
        data: {
          // id: e.target.children[1].name,
          value
        }
      })
      .then(
        () => {
          console.log("THEN");
        },
        message => {
          console.log(`Error: ${message.response}`);
        }
      );

    event.preventDefault();
  }

  render() {
    const { showInput } = this.state;
    return (
      <form style={[style.form]} onSubmit={e => this.handleSubmit(e)}>
        <Label handleClick={this.handleClick} />
        {showInput && (
          <div style={[style.div]}>
            <input
              style={[style.input]}
              type="text"
              onChange={this.handleChange}
            />
            <input type="submit" style={[style.submit]} value="Save" />
          </div>
        )}
      </form>
    );
  }
}

export default Radium(Form);

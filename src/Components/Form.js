import Radium from "radium";
import React, { Component } from "react";
import Label from "./Label";
import style from "./style";
import { storeLabel } from "../browser";

class Form extends Component {
  constructor(props) {
    super(props);
    const { label, commentId } = this.props;
    this.state = {
      showInput: false,
      value: "",
      commentId,
      label
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
    const { value, commentId, showInput } = this.state;
    this.setState(storeLabel(value, commentId, showInput));
    event.preventDefault();
  }

  render() {
    const { showInput, label } = this.state;
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
        <span style={[style.span]}>{label}</span>
      </form>
    );
  }
}

export default Radium(Form);

import Radium from "radium";
import React, { Component } from "react";
import Tag from "./Tag";
import Input from "./Input";
import Label from "./Label";
import style from "./style";
import { removeLabel, storeLabel } from "../browser";

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    storeLabel(value, commentId, showInput).then(newState =>
      this.setState(newState)
    );
    event.preventDefault();
  }

  handleDelete(event) {
    const { commentId } = this.state;
    removeLabel(commentId).then(
      this.setState({
        label: undefined
      })
    );
    event.preventDefault();
  }

  render() {
    const { showInput, label } = this.state;
    return (
      <form style={[style.form]} onSubmit={e => this.handleSubmit(e)}>
        <Tag handleClick={this.handleClick} />
        {showInput && <Input handleChange={this.handleChange} />}
        {!showInput &&
          label !== undefined && (
            <Label label={label} handleDelete={this.handleDelete} />
          )}
      </form>
    );
  }
}

export default Radium(Form);

import Radium from "radium";
import React, { PureComponent } from "react";
import Tag from "./Tag";
import Input from "./Input";
import Label from "./Label";
import style from "./style";
import { removeLabel, storeLabel } from "../browser";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    const { label, commentId } = this.props;
    this.state = {
      showInput: false,
      value: "",
      commentId,
      label
    };
    this.toggleInput = this.toggleInput.bind(this);
    this.saveLabel = this.saveLabel.bind(this);
    this.deleteLabel = this.deleteLabel.bind(this);
    this.setValueState = this.setValueState.bind(this);
  }

  setValueState(event) {
    this.setState({ value: event.target.value });
  }

  toggleInput() {
    const { showInput } = this.state;
    this.setState({
      showInput: !showInput
    });
  }

  saveLabel(event) {
    const { value, commentId, showInput } = this.state;
    storeLabel(value, commentId, showInput).then(newState =>
      this.setState(newState)
    );
    event.preventDefault();
  }

  deleteLabel(event) {
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
      <form style={[style.form]} onSubmit={e => this.saveLabel(e)}>
        <Tag handleClick={this.toggleInput} />
        {showInput && <Input handleChange={this.setValueState} />}
        {!showInput &&
          label !== undefined && (
            <Label label={label} handleDelete={this.deleteLabel} />
          )}
      </form>
    );
  }
}

export default Radium(Form);

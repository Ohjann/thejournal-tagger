import Radium from "radium";
import React, { Component } from "react";
import style from "./style";

class Label extends Component {
  render() {
    const { label, handleDelete } = this.props;
    return (
      <p style={[style.p]}>
        {label}
        <button
          type="button"
          style={[style.deleteSpan]}
          onClick={e => handleDelete(e)}
        >
          x
        </button>
      </p>
    );
  }
}

export default Radium(Label);

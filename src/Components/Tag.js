/* global browser */
import Radium from "radium";
import React, { PureComponent } from "react";

const style = {
  width: "25px",
  "border-radius": "unset",
  "margin-left": "-7px",
  cursor: "pointer"
};

class Label extends PureComponent {
  render() {
    const { handleClick } = this.props;
    return (
      <a href onClick={handleClick}>
        <img
          style={[style]}
          src={browser.extension.getURL("label.svg")}
          alt="label"
        />
      </a>
    );
  }
}

export default Radium(Label);

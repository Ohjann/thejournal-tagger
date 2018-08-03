import Radium from "radium";
import React, { PureComponent } from "react";
import style from "./style";

class Input extends PureComponent {
  render() {
    const { handleChange } = this.props;
    return (
      <div style={[style.div]}>
        <input
          style={[style.input]}
          type="text"
          onChange={e => handleChange(e)}
        />
        <input type="submit" style={[style.submit]} value="Save" />
      </div>
    );
  }
}

export default Radium(Input);

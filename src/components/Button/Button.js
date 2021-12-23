import React from "react";

import { StyledButton } from "./styles";

class Button extends React.Component {
  render() {
    return (
      <StyledButton
        disabled={this.props.isDisabled}
        isDisabled={this.props.isDisabled}
        color={this.props.color}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;

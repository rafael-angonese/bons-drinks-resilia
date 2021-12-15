import React from "react";

class ButtonClass extends React.Component {

  render() {
    
    console.log(this)

    this.props.funcao()

    console.log(this.props.text)

    return <button>{this.props.children}</button>;
  }
}

export default ButtonClass;

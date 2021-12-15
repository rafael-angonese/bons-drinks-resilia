import React from "react";

class ButtonClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this);
    console.log("handleClick");
    this.props.addCart(this.props.id)
  }

  render() {
    console.log(this);

    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

export default ButtonClass;

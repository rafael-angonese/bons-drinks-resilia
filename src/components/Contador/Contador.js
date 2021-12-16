import React from "react";
import Button from "../Button/Button";

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  }

  onIncrement(num) {
    console.log("increment");

    this.setState({
      contador: this.state.contador + num,
    });
  }

  onDecrement(num) {
    console.log("decrement");
    this.setState({
      contador: this.state.contador - num,
    });
  }

  render() {
    console.log(this);
    return (
      <>
        Contandor: {this.state.contador}
        <br />
        <Button onClick={() => this.onIncrement(5)}>Incrementar</Button>
        <Button onClick={() => this.onDecrement(1)}>Decrementar</Button>
      </>
    );
  }
}

export default Contador;

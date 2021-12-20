import React from "react";
import Button from "../Button/Button";

class Contador extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
    console.log('executou o contrutor')
  }

  onIncrement(num) {
    // console.log("increment");

    this.setState({
      contador: this.state.contador + num,
    });
  }

  onDecrement(num) {
    // console.log("decrement");
    this.setState({
      contador: this.state.contador - num,
    });
  }

  componentDidMount() {
      console.log('executou o componentDidMount')
  }

  componentDidUpdate() {
      console.log('executou o componentDidUpdate')

      // this.setState({
      //   contador: this.state.contador * 2,
      // });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')

  }


  render() {
    console.log('execut o render');
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

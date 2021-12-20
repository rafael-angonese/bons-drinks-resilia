import React from "react";
import Button from "../Button/Button";

class Drinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    //fetch('url').then(())
    console.log("did mount");
    this.setState({
      loading: false,
    });
  }

  render() {
    console.log(this.state.loading);
    return (
      <>
        {this.state.loading && <>Carregando...</>}
        {this.state.loading ? "Carregando..." : ""}
      </>
    );
  }
}

export default Drinks;

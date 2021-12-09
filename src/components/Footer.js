import React from "react";

class Footer extends React.Component {
  render() {
    const footer = {
      backgroundColor: "#FFFBEF",
      display: "flex",
      alignItems: "center",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.42)",
      height: "40px",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
    };

    const text = {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#101010",
      textAlign: "center",
      margin: "0 auto",
    };

    return (
      <footer style={footer}>
        <p style={text}>
          Resilia {new Date().getFullYear()} - Alguns direitos reservados
        </p>
      </footer>
    );
  }
}

export default Footer;

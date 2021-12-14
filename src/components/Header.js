import React from "react";

class Header extends React.Component {
  render() {
    const navMenu = {
      backgroundColor: "#FFFBEF",
      boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.42)",
    };
    const myNav = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    };

    const menuItem = {
      fontSize: "24px",
      fontWeight: "bold",
      textDecoration: "none",
      color: "#101010",
      padding: "10px",
      alignSelf: "center",
    };

    return (
      <header style={navMenu}>
        <nav style={myNav}>
          <a
            href="#drinks"
            style={menuItem}
            onMouseOver="this.style.color='red'"
          >
            Drinks
          </a>
          <a href="#sobre" style={menuItem}>
            Sobre Nós
          </a>
          <a href="#home" style={menuItem}>
            Bons Drinks
          </a>
          <a href="#time" style={menuItem}>
            Nosso Time
          </a>
          <a href="#contact" style={menuItem}>
            Contato
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;

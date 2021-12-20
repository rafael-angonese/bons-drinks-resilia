import React from "react";

// import Button from "./components/Button/Button";
// import Clientes from "./components/Clientes";
// import ContactForm from "./components/ContactForm/ContactForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Images from "./components/Images";
import Drinks from "./components/Drinks/Drinks";
// import Contador from "./components/Contador/Contador";


// import contato from "./assets/imagens/contact-pic.jpg";
// import ReactLogo from "./assets/imagens/react.svg";
// import { ReactComponent as Teste } from "./assets/imagens/react.svg";

import "./App.css";

function App() {

  return (
    <div className="grid">
      <Header />
      <main>
        <Drinks />
        {/* <Contador /> */}
        {/* <ContactForm /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

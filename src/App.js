import Button from "./components/Button/Button";
import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm/ContactForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Images from "./components/Images";

import React from "react";

import contato from "./assets/imagens/contact-pic.jpg";
import ReactLogo from "./assets/imagens/react.svg";

import { ReactComponent as Teste } from "./assets/imagens/react.svg";

import "./App.css";
import Contador from "./components/Contador/Contador";

function App() {
  const adicionarCarrinho = (id) => {
    console.log("adicionar no carrinho");
    console.log(id);
  };

  return (
    <div className="grid">
      <Header />
      <main>
        <Contador />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

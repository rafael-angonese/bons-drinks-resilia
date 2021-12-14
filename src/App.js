import Button from "./components/Button/Button";
import ButtonClass from "./components/ButtonClass";
import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm/ContactForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import React from "react";

import "./App.css";

function App() {
  return (
    <div className="grid">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

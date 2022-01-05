import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// import Button from "./components/Button/Button";
// import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm/ContactForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Images from "./components/Images";
import Drinks from "./components/Drinks/Drinks";
// import Contador from "./components/Contador/Contador";

// import contato from "./assets/imagens/contact-pic.jpg";
// import ReactLogo from "./assets/imagens/react.svg";
// import { ReactComponent as Teste } from "./assets/imagens/react.svg";
// `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

import "./App.css";
import Button from "./components/Button/Button";
import { Texto } from "./components/Texto";
import ButtonFn from "./components/ButtonFn/ButtonFn";
import InputText from "./components/InputText/InputText";
import DrinkFunc from "./components/DrinkFunc/DrinkFunc";
import DrinkShow from "./components/DrinkShow/DrinkShow";

function App() {
  // const [nome, setNome] = useState("");
  // const [sobrenome, setSobrenome] = useState("");

  // useEffect(() => {
  //   console.log("lala");
  // }, [nome]);

  return (
    <div className="grid">
      <Header />
      <main>
        {/* <Button isDisabled={false}>Nosso texto</Button>
        <Button isDisabled={true}>Nosso texto</Button>
        <Button isDisabled={false} color="pink">
          Nosso texto
        </Button>

        <br />
        <br />
        <br /> */}

        {/* <Texto color="blue"> Teste</Texto>
        <Texto color="red"> Teste</Texto>
        <Texto color="pink"> Teste</Texto> */}

        {/* <ButtonFn /> */}

        {/* <InputText label="Digite o nome do drink" value={nome} onChange={setNome}>
          <div>
            <p>O nome eh obrigatorio</p>
          </div>
        </InputText>

        <InputText
          label="Digite qualauer coisa"
          value={sobrenome}
          onChange={setSobrenome}
        /> */}

        <Routes>
          <Route path="/" element={<Drinks />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/drinksFunk" element={<DrinkFunc />} />
          <Route path="/drinks/id" element={<DrinkShow />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<>Página não encontrada</>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

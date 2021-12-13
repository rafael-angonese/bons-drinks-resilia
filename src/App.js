import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <main className="grid">
      {/*area do grid externo topo*/}
      <section className="topo"></section>
      {/*area do grid externo meio e também sendo um grid container*/}
      <section className="meio">
        {/*primeira linha do grid interno - a ordem importa, então ele vai ler o HTML de cima para baixo para renderizar (desenhar na tela) da esquerda para a direita*/}
        <div className="bloco4colunas"></div>
        <div className="bloco6colunas"></div>
        <div className="bloco2colunas"></div>
        {/*segunda linha do grid interno*/}
        <div className="bloco2colunas"></div>
        <div className="bloco4colunas"></div>
        <div className="bloco4colunas"></div>
        <div className="bloco2colunas"></div>
        {/*terceira linha do grid interno*/}
        <div className="bloco6colunas"></div>
        <div className="bloco2colunas"></div>
        <div className="bloco4colunas"></div>
      </section>
      {/*area do grid externo fim*/}
      <section className="fim"></section>
    </main>
  );
}

export default App;

import Button from "./components/Button";
import ButtonClass from "./components/ButtonClass";
import Clientes from "./components/Clientes";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <main className="flexGrid">
    <section className="topo"></section>
    <section className="meio">
      {/* primeira linha do flex-grid */}
      {/* é muito comum também usarem uma div class = row para segurar todos os itens de coluna daquela linha. 
      Como aqui o exemplo é mais simples, não fiz assim, mas paro algo mais robusto seria o ideal*/}
      <div className="bloco4colunas linha"></div>
      <div className="bloco6colunas linha"></div>
      <div className="bloco2colunas linha"></div>
      {/* segunda linha  do flex-grid */}
      <div className="bloco2colunas"></div>
      <div className="bloco4colunas"></div>
      <div className="bloco4colunas"></div>
      <div className="bloco2colunas"></div>
      {/* terceira linha  do flex-grid */}
      <div className="bloco6colunas"></div>
      <div className="bloco2colunas"></div>
      <div className="bloco4colunas"></div>
    </section>
    <section className="fim"></section>
  </main>
  );
}

export default App;

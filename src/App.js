import Button from "./components/Button";

function App() {
  const meuInput = {
    width: "100%",
    padding: "12px 20px",
    marginBottom: "20px",
  };
  const meuBotao = {
    width: "80px",
    padding: "5px 20px",
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#ddd255",
    border: "1px solid #cccccc",
    marginRight: "15px",
  };

  const clienteJoao = {
    nome: "João",
    idade: 37,
    compras: [
      { nome: "Notebook", preco: "2500" },
      { nome: 'Motocicleta"', preco: "10000" },
      { nome: "Smartphone", preco: "1500" },
      { nome: "Conjunto de panelas", preco: "2000" },
    ],
    cidade: "Belém",
  };

  const clienteMaria = {
    nome: "Maria",
    idade: 18,
    compras: [
      { nome: "Computador", preco: "2500" },
      { nome: "Coletânia de livros", preco: "1000" },
      { nome: "Smartphone", preco: "1500" },
    ],
    cidade: "Rio de Janeiro",
  };

  const checkIdade = (idade) => {
    if (idade >= 18) {
      return (
        <div>
          <p>Maior de idade: {idade}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Menor de idade: {idade}</p>
        </div>
      );
    }
  };

  const totalJoao = clienteJoao.compras
    .map((item) => Number(item.preco))
    .reduce((a, b) => a + b);

  const totalMaria = clienteMaria.compras
    .map((item) => Number(item.preco))
    .reduce((a, b) => a + b);

  return (
    <div>
      {/*Utilizamos as chaves para poder passar as variaveis pro JSX*/}

      <p>{clienteJoao.nome}</p>

      <p>{clienteJoao.idade >= 18 ? "Maior de idade" : "Menor de idade"}</p>

      <p> {checkIdade(clienteJoao.idade)} </p>

      <div
        style={{
          fontSize: "18px",
          width: "70%",
          margin: "0 auto",
          color: "#013220",
          backgroundColor: "#e6ddc5",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Página dos Clientes</h1>
        <p>
          <strong>Cliente 1:</strong> {clienteJoao.nome}
        </p>
        <ul style={{ listStyle: "circle" }}>
          <li>Idade: {clienteJoao.idade}</li>
          <li>Total de Compras: R${totalJoao}</li>
        </ul>
        <p>
          <strong>Cliente 2:</strong> {clienteMaria.nome}
        </p>
        <ul style={{ listStyle: "circle" }}>
          <li>Idade: {clienteMaria.idade}</li>
          <li>Total de Compras: R${totalMaria}</li>
        </ul>
      </div>

      <h1 style={{ textAlign: "center" }}>Olá, mundo!</h1>

      <p style={{ color: "green", textAlign: "center" }}>
        Meu primeiro form com JSX
      </p>

      <form style={{ width: "400px", margin: "0 auto" }}>
        <label>Nome</label>
        <input style={meuInput} />
        <label>Email</label>
        <input style={meuInput} />
        <label>Telefone</label>
        <input style={meuInput} />
        <button style={meuBotao}>Enviar</button>

        <Button />
      </form>
    </div>
  );
}

export default App;

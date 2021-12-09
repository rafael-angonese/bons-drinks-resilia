// Exercícios de Recapitulação de JS - Respostas

//Arrow Function
const upperName = (name) => {
  return name.toUpperCase();
};

const myFunction = (p1, p2) => {
  return p1 * p2;
};

const toCelsius = (fahrenheit) => {
  return (5 / 9) * (fahrenheit - 32);
};

//tem que ficar em apenas 2 linhas de código
function handleMouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

//variavel que receba name e outra para colors
const {
  name,
  products: {
    shirts: { colors },
  },
} = company;

//Rest & Spread

//clone o objeto clothes
const otherClothes = { ...clothes };

//clone o objeto clothes acima e add um objeto shoes com propriedade colors: ['yellow', 'purple']
const moreClothes = {
  ...clothes,
  shoes: { colors: ["yellow", "purple"] },
};

//Arrays e seus métodos
//Retorne a raiz quadrada de todos os valores do array original
var x = numbers.map(Math.sqrt);

//multiplique todos os valores do array por 10
var newarray = numbers.map((num) => num * 10);

//retorne um array com valores de age (idade) maiores ou iguais a 18 com arrow function
ages.filter((age) => age >= 18);

//retorne somente os cachorros com filter
let dogs = data.filter((animal) => {
  return animal.type === "dog";
});

//ainda utilizando o array acima, retorne a soma da idade de todos os cachorros
var calcAge = dogs.reduce((sum, animal) => {
  return sum + animal.age;
}, 0);

//Parte 2 - Hora do Jogo!

//Passe para Arrow Function e desestruture para pegar colors
const getShirtsColorsAmount = ({
  products: {
    shirts: {
      colors: { length },
    },
  },
}) => length;

//desestruture com spread operator apenas os dados de roupas que não são calças
const { pants, ...rest } = clothes;

//desestruture o array com spread para clonar todos itens menos o primeiro
const [a, ...rest] = arr;

//retorne o nome completo de cada pessoa no array utilizando arrow function
const nomeCompleto = persons.map(
  (item) => item.firstname + " " + item.lastname
);

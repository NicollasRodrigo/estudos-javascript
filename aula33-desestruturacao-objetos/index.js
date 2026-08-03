const pessoa = {
  nome: "Nicollas",
  sobrenome: "Rodrigo",
  idade: 18,
  endereco: {
    rua: " josé Ricardo M. morais",
    numero: 302,
  },
};

// Atribuição via desestruturação
const{ nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);

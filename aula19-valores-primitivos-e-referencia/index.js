/*
primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol)
Referência (mutável) - array , object, function - Passados por referência
*/
//          0123

/*
let a = [1, 2, 3];
let b = [...a];
let c = b;


console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Nicollas');
console.log(a, c);
*/


const a = {
    nome: 'Luiz',
    sobrenome: 'otávio'
};
const b = a;

a.nome = 'João';
console.log(a);
console.log(b);









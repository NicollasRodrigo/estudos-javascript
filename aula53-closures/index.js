// Global
function retornaFuncao() {
    const nome = 'Nicollas';
    return function() {
    return  nome;

    }; 
}

const funcao  = retornaFuncao('Nicollas');
const funcao2 = retornaFuncao('Rodrigo');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());
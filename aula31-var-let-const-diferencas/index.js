const verdadeira  = true;
// Let  teme escopo  de bloco { ... bloco }
// Var  só tem  escopo  de função 
let nome = 'Nicollas';  // criando  
var nome2 = 'Nicollas';

if (verdadeira) {
    let nome = 'Rodrigo'; //  criando
    console.log('nome, nome2');
    // console.log (nome, nome2);
    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log('nome, nome2');
    }
}
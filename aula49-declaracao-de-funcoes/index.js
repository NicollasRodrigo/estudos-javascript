// Declaração  de função (function hoisting)
falaoi();
function falaoi() {
    console.log('oie');
}


// First-class  objects (objects de primeira classe )
// Function expression 
const  souUmdado = function() {
    console.log('Sou um Dado.');
};
souUmdado();

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou  uma Arrow function');
     
};
funcaoArrow();

/// Dentro  de um objeto 
const obj = {
    falar() {
        console.log('Estou falando...');
    }
}
  obj.falar();
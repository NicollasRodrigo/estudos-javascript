//  IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Rodrigo';
    function CriaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(CriaNome('Nicollas'));
    }
    falaNome();
    console.log(idade,peso, altura);
})(30, 80, 1.80);
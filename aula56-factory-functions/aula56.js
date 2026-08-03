//Factory function          (Função fábrica)
// Constructor function      (Função construtora)
function criaPesssoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

       // Getter  
        get nomeCompleto() {
          return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
        valor  = valor.split(' '); 
        this.nome = valor.shift();
        this.sobrenome = valor.join (' ');
        
    }, 

        fala (assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}. `; 
        },
        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPesssoa('Nicollas', 'Rodrigo', 1.8, 80);
const p2 = criaPesssoa('João',  'Pedro',  1.8, 80);
const p3 = criaPesssoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc); 
console.log(p2.imc);
console.log(p3.imc); 









// const p1 = criaPesssoa('Nicollas', 'Rodrigo', 1.8, 80);
// p1.nomeCompleto = 'Maria  Eduarda';
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());
// ============================================================
//  AULA 69 - forEach explicado passo a passo
//  📚 Formato didático: simples, com exemplos e analogias
// ============================================================

// ------------------------------------------------------------
// 1) O que é o forEach?
// ------------------------------------------------------------
// forEach = "para cada" elemento do array, faça algo.
// É como um robô que passa por cada caixa de uma esteira
// e executa a mesma tarefa em cada uma delas.

// Primeiro, vamos ver o seu código ORIGINAL (com o bug):
console.log('--- 1. SEU CÓDIGO ORIGINAL ---');
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;
a1.forEach(valor => {
    total =+ valor;   // ⚠️ BUG: isto é "total = +valor" (sobrescreve!)
});
console.log('Resultado errado:', total);
// Resultado: 90 (porque ele só guarda o ÚLTIMO valor a cada volta)

// ------------------------------------------------------------
// 2) Entendendo o bug: =+ vs +=
// ------------------------------------------------------------
// +=  significa: pegue o total, SOME o valor e guarde de novo.
//    total += valor   →   total = total + valor   (ACUMULA)
//
// =+  NÃO é um operador! JavaScript lê como: total = +valor
//    O + na frente apenas deixa o número positivo.
//    Então ele SOBRESCREVE o total a cada volta.
//    (só o último valor fica guardado)

console.log('\n--- 2. CORREÇÃO DO BUG ---');
let totalCorreto = 0;
a1.forEach(valor => {
    totalCorreto += valor;   // ✅ ACUMULA corretamente
});
console.log('Resultado correto:', totalCorreto);
// Resultado: 450 (10+20+30+40+50+60+70+80+90)

// ------------------------------------------------------------
// 3) Como o forEach funciona "por dentro"?
// ------------------------------------------------------------
// O forEach recebe uma FUNÇÃO e chama essa função
// para CADA item do array. Podemos comparar com um for clássico:

console.log('\n--- 3. COMPARANDO COM FOR ---');
// Usando for (forma tradicional):
let somaComFor = 0;
for (let i = 0; i < a1.length; i++) {
    somaComFor += a1[i];
}
console.log('Soma com for:', somaComFor);

// Usando forEach (forma enxuta):
let somaComForEach = 0;
a1.forEach(valor => {
    somaComForEach += valor;
});
console.log('Soma com forEach:', somaComForEach);
// Os dois dão o mesmo resultado! O forEach é só mais "resumido".

// ------------------------------------------------------------
// 4) Os 3 parâmetros que o forEach pode receber
// ------------------------------------------------------------
// Dentro da função, você pode usar:
//   1º → valor       (o elemento atual)
//   2º → indice      (a posição: 0, 1, 2...)
//   3º → arrayCompleto (todo o array)

console.log('\n--- 4. USANDO ÍNDICE E ARRAY COMPLETO ---');
const frutas = ['Maçã', 'Banana', 'Uva'];
frutas.forEach((fruta, indice, array) => {
    console.log(`Posição ${indice}: ${fruta} | Do array [${array}]`);
});
// Posição 0: Maçã | Do array [Maçã,Banana,Uva]
// Posição 1: Banana | Do array [Maçã,Banana,Uva]
// Posição 2: Uva | Do array [Maçã,Banana,Uva]

// ------------------------------------------------------------
// 5) Exemplo prático no dia a dia
// ------------------------------------------------------------
// Imagine uma lista de alunos e queremos mostrar todos:

console.log('\n--- 5. EXEMPLO PRÁTICO ---');
const alunos = ['Ana', 'Bruno', 'Carla', 'Diego'];
console.log('Lista de alunos:');
alunos.forEach(aluno => {
    console.log(`✅ ${aluno} está presente`);
});

// ------------------------------------------------------------
// 6) RESUMO FINAL
// ------------------------------------------------------------
// ✔️ forEach percorre cada item do array
// ✔️ Use `+=` para somar (nunca `=+`)
// ✔️ Dentro da função você pode usar (valor, indice, array)
// ✔️ O forEach NÃO retorna nada (só executa a ação)
// ✔️ Para transformar/criar novo array use map
// ✔️ Para filtrar use filter | Para reduzir use reduce

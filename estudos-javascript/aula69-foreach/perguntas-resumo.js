// ============================================================
//  📌 O forEach "resume tudo"? NÃO! Vamos entender.
// ============================================================

// ------------------------------------------------------------
// O forEach NÃO faz o cálculo por você.
// Ele apenas PERCORRE cada item. Quem faz o cálculo
// é o CÓDIGO que você escreve DENTRO dele.
// ------------------------------------------------------------

console.log('--- O forEach NÃO resume. Ele só percorre. ---\n');

const numeros = [2, 4, 6];

// Exemplo 1: forEach SEM acumular nada
// Ele percorre, mas se não tiver lógica de soma, não soma nada:
console.log('Exemplo 1: forEach que só mostra');
numeros.forEach(n => {
    console.log('  item:', n);
});
// Resultado: só mostra os números. NENHUMA soma aconteceu.

// Exemplo 2: forEach com lógica de soma DENTRO
// A soma acontece porque VOCÊ escreveu "total += n"
let total = 0;
numeros.forEach(n => {
    total += n;   // ← a soma é sua, não do forEach!
});
console.log('\nExemplo 2: total =', total);
// Resultado: 12 (porque você mandou somar)

// ------------------------------------------------------------
// 🔑 O ponto-chave:
// forEach = o "motorista" que leva você até cada casa.
// Você é quem decide o que fazer em cada casa (somar, imprimir, etc.)
// ------------------------------------------------------------

console.log('\n--- Sem o forEach, você faria na mão (for) ---');
let total2 = 0;
for (let i = 0; i < numeros.length; i++) {
    total2 += numeros[i];
}
console.log('Com for: total2 =', total2);

console.log('\n--- COM o forEach, você simplifica o "percorrer" ---');
let total3 = 0;
numeros.forEach(n => {
    total3 += n;
});
console.log('Com forEach: total3 =', total3);

// ------------------------------------------------------------
// ⚠️ IMPORTANTE: quando o forEach NÃO é ideal
// ------------------------------------------------------------
// O forEach SÓ percorre. Ele NÃO cria um novo array.
// Para isso, JavaScript tem métodos próprios:

console.log('\n--- O forEach NÃO serve para criar novo array ---');
const numeros2 = [1, 2, 3];

// forEach: só percorre, não devolve nada
let novosComForEach = [];
numeros2.forEach(n => {
    novosComForEach.push(n * 2);  // você cria manualmente
});
console.log('forEach (manual):', novosComForEach);

// map: PERFEITO para criar novo array (já estudou na aula 66!)
const novosComMap = numeros2.map(n => n * 2);
console.log('map (automático):', novosComMap);

// ------------------------------------------------------------
// ✅ RESUMO EM UMA FRASE
// ------------------------------------------------------------
// O forEach NÃO resume/calcula nada.
// Ele só te ajuda a PASSAR por cada item do array.
// Toda a lógica (somar, filtrar, criar) é VOCÊ quem escreve.
// Se você quer criar um novo array, use map/filter/reduce.
// Se só quer "visitar" cada item e executar uma ação, use forEach.

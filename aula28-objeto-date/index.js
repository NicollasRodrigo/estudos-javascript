function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = data.getFullYear();
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
console.log(formataData(data));
// https: //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
//const TresHoras = 60 * 60 * 3 * 1000;
//const UmDia =  60 * 60 * 24 * 1000;
//const data = new Date(0 + TresHoras);// 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3); //  a, m, d, h, M, S, ms
//const data = new Date("2019 -04-20 20:20:59");
//console.log("Dia", data.getDate());
//console.log("Mês", data.getMonth() + 1); // Mês começa do zero 
//console.log("Ano", data.getFullYear());
//console.log("Hora", data.getHours());
//console.log("Min", data.getMinutes());
//console.log("Seg", data.getSeconds());
//console.log("ms", data.getMilliseconds());
//console.log("Dia semana", data.getDay()); // 0 - Domingo, 6- Sábado
//console.log(data.toString());
//console.log(Date.now());

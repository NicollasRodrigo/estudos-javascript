const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgoundColorBody = estilosBody.backgroundColor;
console.log(backgoundColorBody);

for (let p of  ps){
    // background
    p.style.backgroundColor = backgoundColorBody;
    p.style.color =  '#FFFFFF';
}
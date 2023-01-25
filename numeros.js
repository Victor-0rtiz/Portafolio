let alturaCm= 170;
let alturaM= 1.70;
let pesokg = 110.00; 
let altRedondeada= alturaM.toFixed();
let pesoRedondeado= pesokg.toPrecision(7);
let valorMaximo = Number.EPSILON+1 == Number.EPSILON;


console.log(altRedondeada);
console.log(pesoRedondeado);
console.log(valorMaximo);
let nombre= "Victor";
let apellido= "Ortiz";
let estudiante= ` El estudiante ${nombre} ${apellido} `;

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numeroLetras = estudiante.length;
let primeraLetra= nombre.charAt(0);
let ultimaLetra= nombre.charAt(5);
let sinEspacios = estudiante.trim();
let nombreExiste = estudiante.includes(nombre);


console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numeroLetras);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(sinEspacios);
console.log(nombreExiste);

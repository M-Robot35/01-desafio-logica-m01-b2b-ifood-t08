// ===========================================
// somar numeros
// ===========================================
const numbers = [1, 2, 3, 4]

const soma = numbers.reduce((acumulator, currentvalue)=> acumulator + currentvalue, 0)
console.log(soma)
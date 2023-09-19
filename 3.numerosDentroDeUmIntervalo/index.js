// ===========================================
// numeros dentro de um intervalo 
// ===========================================

const lista =  [10, 5, 20];

function solucao(numero, limiteInferior, limiteSuperior) {
    return (numero>= limiteInferior && numero <= limiteSuperior) ? 'PERTENCE' : 'NAO PERTENCE'
}
console.log(solucao(lista))
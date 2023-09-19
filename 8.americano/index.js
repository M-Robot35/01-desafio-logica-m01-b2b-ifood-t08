// ===========================================
// Americano
// ===========================================

function solucao(numeros) {
    // seu codigo aqui
    let index = 0
    const someTotal = numeros.reduce((acumulator, currencyValue)=> currencyValue + acumulator, 0);   
    
    for(let i = 0; i < someTotal; i++){
        if(index == numeros.length){
            index = 0
        }
        index++        
    }
    console.log(index)
}
const result = solucao([1, 3, 2, 1]);
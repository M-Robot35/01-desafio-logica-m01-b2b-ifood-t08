// ===========================================
// caçula dos adultos
// ===========================================


function solucao(lista) {
    // seu codigo aqui
    
    lista.sort(compareNumbers)
    const ver = lista.find((element) => element > 17);
    
    if(ver == undefined){
        return console.log('CRESCA E APARECA')
    }
    console.log(lista);        
}

function compareNumbers(a, b) {
    return a - b;
}
  
const x = [12, 17, 77];

solucao(x)


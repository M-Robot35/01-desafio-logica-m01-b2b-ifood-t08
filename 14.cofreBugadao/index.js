// ===========================================
// Cofre Bugado
// ===========================================

function processData(input) {
    //Enter your code here
    const entradaFiltrada = input.trim().split("\n");
    const senhaCerta = entradaFiltrada[0].trim().split('');
    const entradaDigitada = entradaFiltrada[1].trim().split('');
    
    let contador = 0;
    for (let i = 0; i < entradaDigitada.length; i++) {
        if (entradaDigitada[i] === senhaCerta[contador]) {
            contador++;
        }
    }
    (contador === senhaCerta.length)? console.log("SIM") : console.log("NAO") 
} 

processData(`
cubos 
cuggbyos`)


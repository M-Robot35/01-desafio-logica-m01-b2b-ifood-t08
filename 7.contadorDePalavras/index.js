// ===========================================
// contador de palavras
// ===========================================

function solucao(texto) {
    // Seu codigo aqui    
    const clearString = texto.trim()
    const todasPalavras = clearString.split(' ').filter(( espaco )=> espaco.length > 0).length
    console.log(todasPalavras)   
}

const palavra = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer  ";

solucao(palavra)


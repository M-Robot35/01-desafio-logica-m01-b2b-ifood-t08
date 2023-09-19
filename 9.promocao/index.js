// ===========================================
// Promoção
// ===========================================

function solucao(precos) {
    //seu codigo aqui
    const total = precos.reduce((acumulator, currencyValue )=> currencyValue + acumulator, 0)
    if(precos.length >= 3){
        const itemMaisBaratoComDesconto = Math.min(...precos) / 2 // 50%
        const result = total - itemMaisBaratoComDesconto
        console.log(result)
    }else{
        console.log(total)
    }
}
  solucao([200, 150, 50, 100])
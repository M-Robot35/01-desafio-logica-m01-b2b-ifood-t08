// ===========================================
// Taximitro
// ===========================================

function solucao(min, km) {
    //seu codigo aqui
    let valorInicial = 0
    
    if(min > 20){
        const cadaDezKm = (20 * 50 ) + ( (min - 20) * 30 )
        valorInicial+=cadaDezKm
    }
    if(km > 10){
        const cadaDezKm = ( 10 * 70 ) + ( (km - 10) * 50 )
        valorInicial+=cadaDezKm
    }
    if( min <= 20){
        valorInicial+= min * 50
    }

    if(km <= 10){
        const cadaDezKm = 70 * km
        valorInicial+=cadaDezKm
    }    
    console.log(Math.floor(valorInicial))
}
solucao( 25, 11.5 )
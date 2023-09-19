// ===========================================
// mesa de poker
// ===========================================

function solucao(min, max, valores) {
    //seu codigo aqui
    let jogadores = []   

    valores.forEach(player => {
        if(player >= min && player <= max){
            jogadores.push(player)
        }
    });
    console.log(jogadores)
}
const valores = [0, 5, 6, 10, 11]

solucao(2, 10, valores)  //  [ 5, 6, 10 ]
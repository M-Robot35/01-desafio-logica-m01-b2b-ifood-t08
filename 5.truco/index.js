// ===========================================
// truco
// ===========================================

const cartaVirada = {
    Q : "J",
    J : "K",
    K : "A",
    A : "2",
    2 : "3",
    3 : "Q"
}

function solucao(carta) {
    //seu codigo aqui
    console.log(cartaVirada[carta])
}

solucao('K') // A
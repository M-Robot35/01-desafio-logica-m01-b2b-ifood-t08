// ===========================================
// Zerinho ou Um
// ===========================================

const jogadores =[
    {
      "nome": "Herman",
      "jogada": 0
    },
    {
      "nome": "Rhodes",
      "jogada": 1
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]

let zero = []
let um = []

for(let jogador of jogadores ){

    if(jogador.jogada == 1){
        um.push(jogador)   

    }else if(jogador.jogada == 0){
        zero.push( jogador)        
    }
}

if(um.length == 1){
    const { nome, jogada } = um[0]
    console.log(nome)

}else if( zero.length == 1){
    const { nome, jogada } = zero[0]
    console.log(nome)
}else{
    console.log('NINGUEM')
}
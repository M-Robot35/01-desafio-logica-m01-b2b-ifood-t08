// ===========================================
// Distancia Maxima
// ===========================================

function filtraString( arrayForObject ){
    cordenadas = arrayForObject.slice(1)
    let object = [] // [ { x: 0, y: 0 }, { x: 0, y: 3 }, { x: 4, y: 0 } ]
   
    cordenadas.forEach(( cordenadas )=>{
        const [eixoX, eixoY ] = cordenadas.split(' ')      
        object.push({x: eixoX, y: eixoY})
    })        
    return object
}

function processData(input) {
    //Enter your code here
    const todosElementos = input.split('\n').filter(( letra )=> letra.length > 0)
    const funcionarios = Number(todosElementos[0])
    const cordenadasObj = filtraString(todosElementos)   
    
    let maiorDistancia = 0

    for(let i = 0; i < cordenadasObj.length; i++){
        for(let j = 1; j < cordenadasObj.length; j++){
            const calcularX = Math.pow((cordenadasObj[i]['x'] - cordenadasObj[j]['x']), 2) + Math.pow((cordenadasObj[i]['y'] - cordenadasObj[j]['y']), 2)
            const calculo = Math.sqrt(calcularX)       
            
            if(calculo > maiorDistancia){
                maiorDistancia = calculo
            }
        }            
    } 
    console.log(maiorDistancia)
}
const entrada = `
3
0 0
0 3
4 0
`

processData( entrada )
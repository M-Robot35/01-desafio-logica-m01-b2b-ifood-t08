// ===========================================
// Caplock
// ===========================================

function processData(input) {
    //Enter your code here
    const palavraArray = input.split('')
    const restoDoArray = input.slice(1)
    let formaLetra = ''  
    
    // Tratando quando todas forem MAIUSCULAS
    if(input.toLocaleUpperCase() === input){
        console.log(input.toLocaleLowerCase())
    }   

    // Tratando quando todas foresm MINUSCULAS
    else if(input.toLocaleLowerCase() === input ){       
        console.log(input)
    }

    // Tratando quando  a primeira for Minuscula e o restante  Maiuscula
    else if(input[0] == input[0].toLowerCase() && restoDoArray.toLocaleUpperCase() == restoDoArray){      
        formaLetra+=input[0].toLocaleUpperCase()
        console.log(formaLetra)
        palavraArray.forEach((letra, index) => {
            if( index != 0){
                formaLetra+=letra.toLocaleLowerCase()
            }
        });
        console.log(formaLetra)
    }
    else{
        console.log(input)
    }
}     
processData('cfDKLAEWE')
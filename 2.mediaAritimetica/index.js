// ===========================================
// media aritimetica
// ===========================================

const lista = [2, 3, 4];

const media = lista.reduce((acumulator, currentvalue)=> acumulator + currentvalue, 0) / lista.length
    console.log(media);  
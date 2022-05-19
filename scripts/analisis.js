

function mediaAritmetrica(lista) {
    const suma = lista.reduce((cont = 0, element) => cont + element);
    return suma / lista.length;
}


function medianaSalarios(lista) {
    let mediana;
    if (lista.length % 2 == 0){
        // mediana =  (lista[lista.length/2 - 1] + lista[lista.length/2]) / 2   ;
        mediana = mediaAritmetrica([lista[lista.length/2-1],lista[lista.length/2]])
    } else {
        mediana = lista[parseInt(lista.length/2)];
    }
    return mediana;
}

// Mediana General
const salariosCol = colombia.map((persona) => persona.salario);
const salariosColSorted = salariosCol.sort((a,b) => b - a);
const medianaGeneral = medianaSalarios(salariosColSorted);

// Mediana top 10
const Top10 = parseInt(0.10 * salariosCol.length);
const salariosColTop10 = salariosColSorted.splice(0,Top10);
const medianaTop10 = medianaSalarios(salariosColTop10);
console.log(salariosColTop10, medianaTop10);
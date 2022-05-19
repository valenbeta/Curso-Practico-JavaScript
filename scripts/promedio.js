function promedio(lista) {
    const suma = lista.reduce((cont = 0, element) => cont + element);
    return suma / lista.length;
}

function mediana(lista) {
    let listaOrdenada = lista.sort((a,b) => a-b);
    let mediana;
    if (lista.length % 2 == 0){
        // mediana =  (lista[lista.length/2 - 1] + lista[lista.length/2]) / 2   ;
        mediana = promedio([lista[lista.length/2-1],lista[lista.length/2]])
    } else {
        mediana = lista[parseInt(lista.length/2)];
    }
    return mediana;
}

function moda(lista) {
    let listaCount = {};
    lista.map ((elemento) => 
        {if (listaCount[elemento]) {
            listaCount[elemento] ++;
        } else {
            listaCount[elemento] = 1;
        }}
    )
    const array = Object.entries(listaCount).sort((a,b)=> b[1] - a[1]);
    return Number(array[0][0]);
}

function mediaOnClick() {
    const Inputlista = document.getElementById("InputValue");
    const listaString = Inputlista.value.trim().split(" ");
    let listaNumber = [];
    listaString.forEach(element => {
        listaNumber.push(Number(element));
    });
    const resultado = document.getElementById("Resultado");
    const promedio_lista = promedio(listaNumber);
    resultado.innerText = `El promedio de la lista de valores ingresados es ${promedio_lista}.`
}

function medianaOnClick() {
    const Inputlista = document.getElementById("InputValue");
    const listaString = Inputlista.value.trim().split(" ");
    let listaNumber = [];
    listaString.forEach(element => {
        listaNumber.push(Number(element));
    });
    const resultado = document.getElementById("Resultado");
    const mediana_lista = mediana(listaNumber);
    resultado.innerText = `La mediana de la lista de valores ingresados es ${mediana_lista}.`
}

function modaOnClick() {
    const Inputlista = document.getElementById("InputValue");
    const listaString = Inputlista.value.trim().split(" ");
    let listaNumber = [];
    listaString.forEach(element => {
        listaNumber.push(Number(element));
    });
    const resultado = document.getElementById("Resultado");
    const moda_lista = moda(listaNumber);
    resultado.innerText = `La moda de la lista de valores ingresados es ${moda_lista}.`
}
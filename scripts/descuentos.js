function calcularDescuento(precioOriginal,descuento) {

    const precioDescuento = precioOriginal * (1-descuento/100);
    return precioDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrecioOriginal = document.getElementById("InputPrice");
    const precioOriginal = inputPrecioOriginal.value;
    const inputDescuento = document.getElementById("InputDiscount");
    const descuento = inputDescuento.value;
    const precioConDescuento = calcularDescuento(precioOriginal,descuento);
    const precio = document.getElementById("ResultP");
    precio.innerText = `El precio del producto con el ${descuento}% de descuento es de $ ${precioConDescuento}.`;
}
console.log(calcularDescuento(100000,20));
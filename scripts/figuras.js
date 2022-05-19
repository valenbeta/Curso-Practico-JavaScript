console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}


function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

console.group("Triángulos");

function perimetroTriangulo(lado1,lado2,lado3) {
  return lado1 + lado2 + lado3;
}

function areaTriangulo(lado1,lado2) {
  return (lado2 * Math.pow(Math.pow(lado1,2)-Math.pow((lado1/2),2),(1/2))) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

console.group("Círculos");

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

//HTML

function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimeter = perimetroCuadrado(value);
    alert ("El perímetro del cuadrado es: " + perimeter + "cm.");
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert ("El área del cuadrado es: " + area + "cm^2.");
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = input.value;
    const perimeter = perimetroCirculo(value);
    alert("El perímetro del círculo es: " + perimeter + "cm.");
}

function calcularAreaCirculo(params) {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert ("El área del circulo es: " + area + "cm^2.");
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1")
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2")
    const value2 = input1.value;
    const input3 = document.getElementById("InputTriangulo3")
    const value3 = input1.value;

    const perimeter = perimetroTriangulo(value1,value2,value3);
    alert("El perímetro del triángulo es: " + perimeter + "cm.");
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1")
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2")
    const value2 = input1.value;
    const area = areaTriangulo(value1,value2);
    alert ("El área del triángulo es: " + area + "cm^2.");
}
var articulos = [
    {nombre: "Bici" ,costo: 780000 },
    {nombre: "TV",costo: 3500000 },
    {nombre: "PC",costo: 2100000},
    {nombre:"Mouse" ,costo: 35000 },
    {nombre:"Teclado" ,costo: 180000 },
]

var nombreArticulos = articulos.map( (articulo) => articulo.nombre);

var articulosCaros = articulos.filter((articulo) =>  articulo.costo >1000000);



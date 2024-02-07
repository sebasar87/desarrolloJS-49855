/* let opcion = "si";

//funcion que solicita y carga el dato correspondiente 
function cargar(saludo){
    let evaluar = "false";
    let ingreso = "";
    do {
        ingreso = parseFloat(prompt(saludo));
        if (!isNaN(ingreso)){
            evaluar = "true"
        } else{
            alert ("no es un numero intente de nuevo");
        }

    }while (evaluar != "true");   
    
    return ingreso ;
}
//funcion decimal que convierte el numero de porcentaje sin el % en decimal
const decimal = (p) => {return p/100}
//funcion ganancia calculadora de ganancia mensual
function ganancia(monto,plazo,rendi){
    for(let i = 0 ; i < plazo ; i++){
        monto = monto + (monto*rendi);
    }

    return monto;
}
//cuerpo del programa
do {  

    let valor = cargar("Buenos dias calcularemos el interes compuesto de su plazo fijo ingrese monto, solo numeros");

    const porcent = cargar("ingrese el porcentaje que pagara el banco, solo numero");  

    let meses = cargar("Ingrese la cantidad de meses que establecera el plazo fijo, solo numero");

    let conver = decimal(porcent);

    let ganar = ganancia(valor,meses,conver);


    console.log ("Al finalizar el tiempo usted recibira " + ganar);

    opcion = prompt("desea realizar otra prueba. escriba 'si' para continuar o 'no' para salir");

    console.log(opcion);

} while (opcion != 'no');

alert ("gracias por utilizar nuestro servicios, vuelva prontos"); */

/*
let palabra = prompt("inserte la palabra para saber cuantas letar tiene");

if(palabra.includes(",")){
    console.log("existe ',' en la palabra");
}else{
    console.log("no existen ',' en la palabra");
}

console.log("el largo de la palabra es " + palabra.length);
for(let i = 0; i < palabra.length; i++){
    console.log((i+1) + " posicion esta la letra " + palabra[i]);
    if(palabra[i] === ","){
        palabra = palabra.replace(/,/g, '.');
        console.log("se modifico la ',' por '.'");
        console.log(palabra);
    }
}

console.log(palabra);

alert("fin del programa");

*/

const listaProductos = [];



class Productos {
    constructor(nombre,precio,cantidad){
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
    }
}


let Producto = new Productos ("cafe",65.5,20);
listaProductos.push(Producto);
Producto = new Productos ("te",23.6,55);
listaProductos.push(Producto);
Producto = new Productos ("mate",80.54,200);
listaProductos.push(Producto);
Producto = new Productos ("chocolate",105.89,125);
listaProductos.push(Producto);
Producto = new Productos ("fideos",30,176);
listaProductos.push(Producto);
Producto = new Productos ("salame",140,76);
listaProductos.push(Producto);


const divTabla = document.getElementById("tabla");
/*divTabla.innerHTML = listaProductos[0].nombre,listaProductos[0].precio,listaProductos[0].cantidad;
console.log(listaProductos[0])
*/

console.table(listaProductos);
console.log(Object.keys(Producto));
const cantidad = Object.keys(Producto);
console.log(cantidad.length);

let contenedor = document.createElement("table");
contenedor.border = 1;
let contbody = document.createElement("tbody");
contbody.innerHTML = `<tr> 
                                <td>Nombre</td> 
                                <td>Precio</td>
                                <td>Cantidad</td>
                            </tr>`;
    contenedor.appendChild(contbody);
    divTabla.appendChild(contenedor);

for (const prod of listaProductos ){
    contbody = document.createElement("tbody");
    contbody.innerHTML = `<tr> 
                                <td>${prod.nombre} </td> 
                                <td>${prod.precio} </td>
                                <td>${prod.cantidad} </td>
                            </tr>`;
    contenedor.appendChild(contbody);
    divTabla.appendChild(contenedor);
}
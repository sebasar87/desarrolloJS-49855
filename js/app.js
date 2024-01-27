let opcion = "";
let ver = "";
let listaProductos=[];

const saludo = () => { alert ("buenos dias");}


class Productos{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
//metodos para obtener losatributos del objeto producto
/*    nombreProducto(){
        return this.nombre;
    }
    precioProducto(){
        return this.precio;
    }
    cantidadProducto(){
        return this.cantidad;
    }*/
}
//funcion para buscar el index del producto en el array
function buscar(nombre){
    return listaProductos.findIndex((producto)=> producto.nombre === nombre);
}
//funcion para cargar unproducto nuevo
function cargar (){
    let nombre = prompt("Ingrese nombre del producto").toUpperCase().trim();
    let ind = buscar(nombre);
    if(ind == -1){
    let precio = parseFloat(prompt("Ingrese precio del producto"));
    let cantidad = parseInt(prompt("Ingrese la cantidad disponible del producto"));
    const Producto = new Productos(nombre,precio,cantidad)
    listaProductos.push(Producto);
    }else{
        alert("El producto ya existe")
    }
}
//funcion que permite modificar un producto
function modificar(){
    let ind = buscar(prompt("ingrese el nombre del producto a modificar").toUpperCase().trim());
    if(ind != -1){ 
    listaProductos[ind].nombre = prompt("Ingrese el nuevo nombre").toUpperCase().trim();
    listaProductos[ind].precio = prompt("ingrese nuevo precio");
    listaProductos[ind].cantidad = prompt("ingrese nueva cantidad");
    return ind;
    }else{
        alert("El producto no existe");
    }
}
//funcion para eliminar un producto
function eliminar(){
    let ind = buscar(prompt("ingrese el nombre del producto a eliminar").toUpperCase().trim());
    listaProductos.splice(ind,1);
}

//funcion decimal que convierte el numero de porcentaje sin el % en decimal
const decimal = (p) => {return p/100}
//funcion que muestra cuanto costarian los productos con un aumento
function aumentar(){
    let evaluar = "false";
    let ingreso = "";
    do {
        ingreso = parseFloat(prompt("Ingrese el porcentaje sin '%' para ver como quedarian los precios con un aumento"));
        if (!isNaN(ingreso)){
            evaluar = "true"
        } else{
            alert ("no es un numero intente de nuevo");
        }
    }while (evaluar != "true");   
    
    let porcen = decimal(ingreso);

    const nuevalist = listaProductos.map((x) => {
        return {
            nombre: x.nombre, precio:(x.precio + (x.precio * porcen)), cantidad: x.cantidad }} );

    verProd(nuevalist);

}
//funcion que muestra la lista de los productos
function verProd(lista){    
    console.table(lista);
}

/*const Producto = new Productos("CAFE",56,90);
listaProductos.push(Producto);
let numero=listaProductos.length;
console.log("valor numero cantidad de productos cargados " + numero);
console.log("el producto cargado es " + listaProductos[numero-1].nombre + ", su precio es " + listaProductos[numero-1].precio + ", la cantidad es " + listaProductos[numero-1].cantidad);
*/
do{
saludo ();
opcion = prompt("Ingrese 1 para agregar producto\nIngrese 2 para modificar producto\nIngrese 3 para eliminar producto\nIngrese 4 para ver todos los productos\nIngrese 5 para calcular el aumento en los precios\nIngrese 6 para salir");
switch(opcion){
    case "1":
        alert ("Ingrese los datos del producto");
        //listaProductos.push(cargar ());
        cargar ()
        let numero=listaProductos.length;
        console.log("valor numero cantidad de productos cargados " + numero);
        console.log("el producto cargado es " + listaProductos[numero-1].nombre + ", su precio es " + listaProductos[numero-1].precio + ", la cantidad es " + listaProductos[numero-1].cantidad);
        break;
    case "2":
        let ind = modificar();
        verProd(listaProductos);
        break;
    case "3":
        eliminar();
        verProd(listaProductos);
        break;
    case "4":
        verProd(listaProductos);
        break;
    case "5":
        aumentar();
        break;
    case "6":
        opcion = confirm("desea salir?");
        break; 
}


}while(opcion !== true);

console.log ("fin del programa");
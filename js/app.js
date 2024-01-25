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
    nombreProducto(){
        return this.nombre;
    }
    precioProducto(){
        return this.precio;
    }
    cantidadProducto(){
        return this.cantidad;
    }
//metodos para realizar la modificacion de los atributos del producto
    nombreModificar(index,nombre){
        this.nombre[index] = nombre;
        return this.nombre;
    }
    precioModificar(index,precio){
        this.precio[index] = precio;
        return this.nombre; 
    }
    cantidadModificar(index,cantidad){
        this.cantidad[index] = cantidad;
        return this.nombre;
    }
    /*buscarProducto(lista,nombre){
        let index = lista.findIndex(Producto => Producto.nombre === nombre);
        return index 
        if(index !== ""){
            return index;
        }else{
            return "el producto no existe"
        }
    }*/

}

function buscar(nombre){
    return listaProductos.findIndex((producto)=> producto.nombre === nombre);
}

function cargar (){
    let nombre = prompt("Ingrese nombre del producto").toUpperCase().trim();
    let precio = parseFloat(prompt("Ingrese precio del producto"));
    let cantidad = parseInt(prompt("Ingrese la cantidad disponible del producto"));
    const Producto = new Productos(nombre,precio,cantidad)
    return Producto;
}

const Producto = new Productos("cafe",56,90);
listaProductos.push(Producto);
let numero=listaProductos.length;
console.log("valor numero cantidad de productos cargados " + numero);
console.log("el producto cargado es " + listaProductos[numero-1].nombre + ", su precio es " + listaProductos[numero-1].precio + ", la cantidad es " + listaProductos[numero-1].cantidad);

do{
saludo ();
opcion = prompt("Ingrese 1 para agregar producto\nIngrese 2 para modificar producto\nIngrese 3 para eliminar producto\nIngrese 4 para ver todos los productos\nIngrese 5 para salir");
//opcion = confirm("desea salir?");
//console.log ("opcion es " + opcion);
switch(opcion){
    case "1":
        alert ("Ingrese los datos del producto");
        listaProductos.push(cargar ())
        let numero=listaProductos.length;
        console.log("valor numero cantidad de productos cargados " + numero);
        console.log("el producto cargado es " + listaProductos[numero-1].nombre + ", su precio es " + listaProductos[numero-1].precio + ", la cantidad es " + listaProductos[numero-1].cantidad);
        break;
    case "2":
        alert ("Ingrese que producto modificar");
/* 
        ver = prompt("ingrese nombre del producto")
        let ind = Productos.buscarProducto(listaProductos,ver)
        if(ind){
            console.log("el producto es " + ver);
        }else{
            alert("fallo " + ver);
        } */
        let ind = buscar(prompt("ingrese el nombre del producto").toUpperCase().trim());
        console.log("la ubicacion es " + ind);
        break;
    case "3":
        alert ("Ingrese que producto eliminar");
        break;
    case "4":
        console.table(listaProductos);
        break;
    case "5":
        opcion = confirm("desea salir?");
        break; 
}


}while(opcion !== true);

console.log ("fin del programa");
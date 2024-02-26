let opcion = "";
let ver = "";
let listaProductos=[];

//const saludo = () => { alert ("buenos dias");}


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
//funcion para cargar desde el localstorage al array
function cargArray(){
    listaProductos = JSON.parse(localStorage.getItem("listaDeProductos"));
    return listaProductos;
}
function removerLocalStorage(){
    localStorage.clear();
}
//funcion para buscar el index del producto en el array
function buscar(nombre){
    return listaProductos.findIndex((producto)=> producto.nombre === nombre);
}
//funcion para ver el dato buscado
function buscarProd(){
    let lista = cargArray();
    let nom = datosFormBEM();
    let ind = buscar(nom);
    //console.log(datos)
    //mostrarProd(lista[ind]);
    ind === -1 ? sweetAlerta() : mostrarProd(lista[ind]);
}
//funcion para alertas
function sweetAlerta(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El dato ingresado es invalido revisa si el producto existe o si ingresaste mal el precio y cantidad!",
        //footer: '<a href="#">Why do I have this issue?</a>'
    });
}
//funcion de alerta para lista vacia
function sweetAlertaLista(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La lista esta vacia!",
        //footer: '<a href="#">Why do I have this issue?</a>'
    });
}
//funcion de alerta para agregado correcto
function sweetAgregar(){
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Tu producto se agrego/modifico correctamente",
        showConfirmButton: false,
        timer: 1500
    });
}
//funcion para levantar los datos del form
function datosForm(){
    let formBEM = document.getElementById("formularioBEM");
    let form = document.getElementById("formulario");
    let nombre = form.elements["nombre"].value.toUpperCase().trim();
    let nombreBEM = formBEM.elements["nombre"].value.toUpperCase().trim();
    if (nombre !=="" || nombreBEM !=="" ){
    let precio = parseFloat(form.elements["precio"].value);
    isNaN(precio) && (precio = 0);
    //console.log("precio " + precio);
    let cantidad = parseInt(form.elements["cantidad"].value);
    isNaN(cantidad) && (cantidad = 0);
    const Producto = new Productos(nombre,precio,cantidad);
    //console.log("esto es en form " + Producto.nombre+" "+Producto.precio+" "+Producto.cantidad)
    return Producto;  
    }else{
        sweetAlerta() ;
    }   
}
//funcion para obtener los datos de formBEM
function datosFormBEM(){
    let formBEM = document.getElementById("formularioBEM");
    let nom = formBEM.elements["nombre"].value.toUpperCase().trim();
    nom === "" && sweetAlerta() ;
    return nom;    
}
//funcion para guardar en localstorage
const guardarLocalStorage = (clave,valor) => {localStorage.setItem(clave,valor)}
//funcion para cargar unproducto nuevo
function cargar (){
    let ind
    const Producto = datosForm();
    const {nombre,precio,cantidad} = Producto;
    //console.log(listaProductos.length);
    listaProductos.length === 0 ? ind = -1 : ind = buscar(nombre);
    if(ind === -1){
    listaProductos.push(Producto);
    guardarLocalStorage("listaDeProductos",JSON.stringify(listaProductos));
    verProd(listaProductos);
    sweetAgregar();
    }else{
        sweetAlerta() ;
    } 
}
/*
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
*/
//funcion para formulario modificar
function modificarForm(){
    let divformMod = document.getElementById("formularioBEM");
    let formBEM = document.createElement("div")
    formBEM.innerHTML = `   <h5>Modifique los datos</h5>
                                <div id="formulario_etiqueta">
                                    <label for="nombreBEM">Nombre:</label>
                                    <input type="text" id="nombreBEM" name="nombreBEM" required>
                                </div>
                                <div id="formulario_etiqueta">
                                    <label for="precio">Precio:</label>
                                    <input type="number" id="precio" name="precio" required>
                                </div>
                                <div id="formulario_etiqueta">
                                    <label for="cantidad">Cantidad:</label>
                                    <input type="number" id="cantidad" name="cantidad" required>
                                </div>                                                                                    
                            `
    divformMod.appendChild(formBEM);
}

//funcion que guarda los datos guardados de modificar
function guardarMod(){
    let lista = cargArray();
    verProd(lista);
    let nom = datosFormBEM();
    let ind = buscar(nom);
    if(ind != -1){ 
        let formBEM = document.getElementById("formularioBEM");
        //let form = document.getElementById("formulario");
        //let nombre = formBEM.elements["nombre"].value.toUpperCase().trim();
        let nombreBEM = formBEM.elements["nombreBEM"].value.toUpperCase().trim();
        if (nombreBEM !=="" ){
            let precioBEM = parseFloat(formBEM.elements["precio"].value);
            isNaN(precioBEM) && (precioBEM = 0);
            //console.log("precio " + precio);
            let cantidadBEM = parseInt(formBEM.elements["cantidad"].value);
            isNaN(cantidadBEM) && (cantidadBEM = 0);
            const Producto = new Productos(nombreBEM,precioBEM,cantidadBEM);
            //console.log("esto es en form " + Producto.nombreBEM+" "+Producto.precioBEM+" "+Producto.cantidadBEM)
            //return Producto;  
            Producto.nombre ==="" && (Producto.nombre = "NOT");
            isNaN(Producto.precio) && (Producto.precio = 0);
            isNaN(Producto.cantidad) && (Producto.cantidad = 0);   
            const {nombre,precio,cantidad} = Producto;
            nombre!=="NOT" && (lista[ind].nombre = nombre);
            precio !==-1 && (lista[ind].precio = precio);
            cantidad !==-1 && (lista[ind].cantidad = cantidad);
            guardarLocalStorage("listaDeProductos",JSON.stringify(lista));
            verLista();
            sweetAgregar();
        }else{
            sweetAlerta() ;
        } 
    }else{
        sweetAlerta() ;
    }  
}

//funcion que permite modificar un producto
function modificar(){
    //let lista = cargArray();
    let nom = datosFormBEM();
    let ind = buscar(nom);
    if(ind != -1){   
    modificarForm(); 
    /*const Producto = modificarForm();
    console.table(Producto);
    Producto.nombre ==="" && (Producto.nombre = "NOT");
    isNaN(Producto.precio) && (Producto.precio = 0);
    isNaN(Producto.cantidad) && (Producto.cantidad = 0);   
    const {nombre,precio,cantidad} = Producto;
    nombre!=="NOT" && (lista[ind].nombre = nombre);
    precio !==-1 && (lista[ind].precio = precio);
    cantidad !==-1 && (lista[ind].cantidad = cantidad);
    guardarLocalStorage("listaDeProductos",JSON.stringify(lista));
    verLista();
    sweetAgregar();
    //return ind;
    */
    }else{
        sweetAlerta();
    }
}
//funcion para eliminar un producto
function eliminar(){
    let lista = cargArray();
    let nom = datosFormBEM();
    let ind = buscar(nom);
    //console.log("valor de ind " + ind);
    if(ind !== -1){
    lista.splice(ind,1);
    guardarLocalStorage("listaDeProductos",JSON.stringify(lista));
    verLista();
    }else{
        sweetAlerta();
    }
}

//funcion decimal que convierte el numero de porcentaje sin el % en decimal
//const decimal = (p) => {return p/100}
//funcion que muestra cuanto costarian los productos en dolares
function aumentar(){
    /*let evaluar = "false";
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
    */
    
    
    const nuevalist = listaProductos.map((x) => {
        return {
            nombre: x.nombre, precio:(x.precio + (x.precio * porcen)), cantidad: x.cantidad }} );

    verProd(nuevalist);

}
//funcion para ver la lista de todos los productos
function verLista(){
    let lista = cargArray();
    //console.log("esto es lista " + lista)
    lista !== null  ? verProd(lista) : sweetAlertaLista();
    lista === null && removerLocalStorage();

}
//funcion que recorre la lista de los productos
function verProd(lista){    
    let contabla = document.getElementById("tablaProd");
    let conttbody = document.createElement("tbody");
    //console.log(lista);
    contabla.innerHTML = " ";
    conttbody.innerHTML = `<tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                            </tr>`;
    contabla.appendChild(conttbody);
    for(const producto of lista){
        const {nombre,precio,cantidad} = producto;
        conttbody = document.createElement("tbody");
        conttbody.innerHTML = `<tr>
                                    <td>${nombre}</td>
                                    <td>${precio}</td>
                                    <td>${cantidad}</td>
                                </tr>`
        contabla.appendChild(conttbody);
    }
    //console.table(lista[0]);
}
//funcion para mostrar un solo producto de la lista
function mostrarProd(producto){    
    let contabla = document.getElementById("tablaProd");
    let conttbody = document.createElement("tbody");
    //console.log(producto);
    contabla.innerHTML = " ";
    conttbody.innerHTML = `<tr>
                                <td>Nombre</td>
                                <td>Precio</td>
                                <td>Cantidad</td>
                            </tr>`;
    contabla.appendChild(conttbody);
    const {nombre,precio,cantidad} = producto;
        conttbody = document.createElement("tbody");
        conttbody.innerHTML = `<tr>
                                    <td>${nombre}</td>
                                    <td>${precio}</td>
                                    <td>${cantidad}</td>
                                </tr>`
        contabla.appendChild(conttbody);
}



/*const Producto = new Productos("CAFE",56,90);
listaProductos.push(Producto);
let numero=listaProductos.length;
console.log("valor numero cantidad de productos cargados " + numero);
console.log("el producto cargado es " + listaProductos[numero-1].nombre + ", su precio es " + listaProductos[numero-1].precio + ", la cantidad es " + listaProductos[numero-1].cantidad);
*/
/*do{
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

console.log ("fin del programa");*/

//boton para cargar
let botonCargar = document.getElementById("agregar");
botonCargar.addEventListener("click",function(){cargar()});
//boton generado por la funcion modificar
let botonGuardar = document.getElementById("guardar");
botonGuardar.addEventListener("click",function(){guardarMod()});
//boton para eliminar
let botonEliminar = document.getElementById("eliminar");
botonEliminar.addEventListener("click",function(){eliminar()});
//boton para modificar
let botonModificar = document.getElementById("modificar");
botonModificar.addEventListener("click",function(){modificar()});
//boton para ver productos
let botonVer = document.getElementById("ver");
botonVer.addEventListener("click",function () {verLista()});
//boton para buscar productos
let botonBuscar = document.getElementById("buscar");
botonBuscar.addEventListener("click",function() {buscarProd()});




/*
localStorage.setItem('producto',prod);
localStorage.setItem('precio',prec);
localStorage.setItem('cantidad',cant);
*/





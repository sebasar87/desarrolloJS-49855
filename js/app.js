//console.log ("buenos dias");

//console.log ("buenos dias, su monto es ");
let opcion = "si";

/*function buscar(punto){
    let evaluar = "false";
    do {
        if(! punto.(".")){
            evaluar = "true"
        }else{
            punto = prompt("ingrese el numero sin '.'")
        }
    }while (evaluar != "false");
}
*/
function cargar(saludo){
    let evaluar = "false";
    let ingreso = "nada";
    do {
        ingreso = parseFloat(prompt(saludo));
        if (typeof ingreso === "number"){
            evaluar = "true"
        } else{
            alert ("no es un numero intente de nuevo");
        }

    }while (evaluar != "true");   
    
    return ingreso ;
}

do {  

    let valor = cargar("Buenos dias calcularemos el interes compuesto de su plazo fijo ingrese monto, solo numeros");

    const porcent = cargar("ingrese el porcentaje que pagara el banco, solo numero");  

    let meses = cargar("Ingrese la cantidad de meses que establecera el plazo fijo, solo numero");

    let conver = parseFloat(porcent/100);


    for(let i = 0 ; i < meses ; i++){
        valor = valor + (valor*conver);
    }


    console.log ("Al finalizar el tiempo usted recibira " + valor);

    opcion = prompt("desea realizar otra prueba. escriba 'si' para continuar o 'no' para salir");

    console.log(opcion);

} while (opcion != 'no');

alert ("gracias por utilizar nuestro servicios, vuelva prontos");
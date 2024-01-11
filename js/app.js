//console.log ("buenos dias");

//console.log ("buenos dias, su monto es ");
let opcion = "si";

do {  

    let valor = parseFloat(prompt ("Buenos dias calcularemos el interes compuesto de su plazo fijo ingrese monto, solo numeros"));

    const porcent = parseFloat(prompt ("ingrese el porcentaje que pagara el banco, solo numero"));  

    let meses = parseInt(prompt ("Ingrese la cantidad de meses que establecera el plazo fijo, solo numero"));

    let conver = parseFloat(porcent/100);


    for(let i = 0 ; i < meses ; i++){
        valor = valor + (valor*conver);
    }


    console.log ("Al finalizar el tiempo usted recibira " + valor);

    opcion = prompt("desea realizar otra prueba. escriba 'si' para continuar o 'no' para salir");

    console.log(opcion);

} while (opcion != 'no');

alert ("gracias por utilizar nuestro servicios, vuelva prontos");
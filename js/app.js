let opcion = "si";

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

alert ("gracias por utilizar nuestro servicios, vuelva prontos");
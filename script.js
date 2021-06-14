// EJERCICIO PRACTICA 
/* Desarrollar un algoritmo donde el usuario ingresa un código de producto y luego se imprime el detalle
del producto - Se piden 3 codigos 
COD 1 - Impresora Samsung Laser
COD 2 - Mouse Genius usb
COD 3 _ Resma A4 500 hojas
COD 4 - Auriculares Philips in-ear */

// for (let i = 0; i < 3; i++) {
//     let codigo = parseInt(prompt("Ingrese el código de producto"));
//     switch (codigo) {
//         case 1:
//             console.log("Impresora Samsung Laser");
//             break;
//         case 2:
//             console.log("Mouse Genius usb");
//             break;
//         case 3:
//             console.log("Resma A4 500 hojas");
//             break;
//         case 4:
//             console.log("Auriculares Philips in-ear");
//             break;
//         default:
//             console.log("Código erróneo!!!");
//             break;
//     }
// }

// Pedir un numero por prompt y sumarle otro numero en cada repeticion, realizando una salida por cada resultado.
// let ingreso = parseInt(prompt("Ingrese un numero"));
// for ( i=  1 ; i <= 3; i++) {
//     let suma= i + ingreso
//     alert(suma);
// }

// Pedir un texto mediante prompt, concatenar un valor con cada repeticion, realizando una salida por cada resultado, hasta ingresar "ESC".
let ingreso= prompt("ingrese una palabra");
    alert("la palabra ingresada es "+ ingreso);
while(ingreso != "ESC"){
    
    let palabra= prompt("ingrese OTRA palabra");
    alert("la otra palabra ingresada es " +palabra)
   
    ingreso += " " +  palabra;
    alert(ingreso);
   
}
    
   

	

// // Imprimir "hola"según el numero ingresado por el usuario.
// let codigo = parseInt(prompt("¿Cuantas veces quiere imprimir HOLA?"));
// for (let i = 1; i <= codigo-1; i++) {
// alert("HOLA")
// }
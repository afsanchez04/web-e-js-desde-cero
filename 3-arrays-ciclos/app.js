

//Una pregunta de cultura general

/* let capital = prompt("¿Cuál es la capital del Colombia?").toLowerCase()
 */
/* while( capital != "bogota" ){

    console.log("Respuesta equivocada 🙄")
    capital = prompt("¿Cuál es la capital del Colombia?")

} */

// Expresión regular  para eliminar Diacriticos    
//console.log( "bogotá".normalize('NFD').replace(/[\u0300-\u036f]/g,"") )

//Tabla de multiplicar del 7

/* let num = 1

while( num <= 10 ){
    console.log( `7x${num}=${7*num}` )
    //console.log( "7x" + num + "=" + (7*num) )
    num++ //Variable de control
} */


//Ciclo for
//Ejemplo de la tabla del 7

/* for(let i = 1; i <= 10; i++){
    console.log( `9x${i}=${9*i}` )
} */


//Arrays

/* let colores = ["rojo","red","blue","azul","orange","naranja","Verde"]
let contador = 0;

//console.log(colores[colores.length-1])
for (let i = 0; i < colores.length; i++) {
    //const element = colores[i];
    console.log(`${i+1}. ${colores[i]}`) 
    contador++
}

console.log(contador) */

//Array de objetos de frutas

let frutas = [
    {
        nombre: "manzana",
        color: "verde"
    },
    {
        nombre: "fresa",
        color: "rojo"
    },
    {
        nombre: "mora",
        color: "verde"
    },
    {
        nombre: "limón",
        color: "verde"
    }
]

let msj = ""

for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    //console.log(`${i+1}. ${element.nombre}`)

    if( element.color === "verde" ){
        
        msj += element.nombre + "🐢 <br>"
    }
    
}

document.write("Las frutas verdes son: " + msj)



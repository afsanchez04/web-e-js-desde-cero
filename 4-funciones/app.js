

//Declarar función

function suma (n1,n2){
    let total = n1 + n2
    return `El total de la suma es: ${total}`
}

let result = suma(4,2)

console.log( result ) 


//hoisting
//scope


/* let cajaDeFrutas = []

function agregarFruta (fruta){
    cajaDeFrutas.push(fruta)
    return fruta
}
function mostrarFrutas (array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<h1>${i + 1}.- ${array[i]} </h1>`);
      }
}

agregarFruta("piña")
agregarFruta("manzana")
agregarFruta("aguacate")
agregarFruta("mora")
mostrarFrutas(cajaDeFrutas) */


/* let cajaDeFrutas = []

function agregarFruta (){

    let fruta = prompt("añade una fruta")

    while( fruta != "salir" ){
        cajaDeFrutas.push(fruta)
        fruta = prompt("añade una fruta")
    }

}
function mostrarFrutas (array){
    for (let i = 0; i < array.length; i++) {
        document.write(`<h1>${i + 1}.- ${array[i]} </h1>`);
      }
} */


let car = {
    color: "red",
    marca: "Audi",
    ruedas: 4,
    acelerar: function (){
        console.log("Ruuuuun 🔥")
    }
}


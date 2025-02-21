

const auto =  {
    nombre: "kia",
    color: "azul",
    llantas: 4
}


auto.nombre = "toyota"

const {nombre, color, llantas} = auto

console.log(nombre)



/**
 * Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
Objeto de muestra:
*/
/* var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
  };
  values = Object.keys(student); // ['name', 'sclass', 'rollno']
  console.log("Propiedades de student:");
  for (let i = 0; i < values.length; i++) {
    console.log(`${1 + i}.- ${values[i]}`);
  } */
  /**
   * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
      var student = {
          name: "David Rayy",
          sclass: "VI",
          rollno: 12
      };
  */
/*   console.log("¿La propiedad name se encuentra dentro del objeto?");
  console.log(student.hasOwnProperty("name")); */

/*   for (let index = 0; index < Object.entries(student).length; index++) {
    console.log((index+1)+". "+Object.entries(student)[index])
} */

/*     let nameexists=false
    let i=0
    while (!nameexists||i<Object.keys(student).length) {
        nameexists=Object.keys(student)[i]=="name"
        i++
    }
    console.log(nameexists) */

   // Este el segundo ejercicio -> 
    
/*     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log("name" in student) */

// Imprime el numero de elementos del objeto
    /* var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(Object.entries(student).length) */

//Reto

const libro = {
    titulo: "El psicoanalista",
    autor: "John Katzenbach",
    anio: "2002",
    estado: "disponible",
    describirLibro: function () {
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
    }
}

console.log(libro.describirLibro())

const cajaTexto = document.getElementById("infoLibro")

function imprimir () {
    cajaTexto.innerText = libro.describirLibro()
}





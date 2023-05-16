// Array.prototype.mayoresQueTres = function(){
//     var arregloModificado = [];

//     for (let i = 0; i < this.length; i++) {
//         if(this[i]>3){
//             arregloModificado.push(false);
//         } else {
//             arregloModificado.push(this[i]);
//         }
//     }
//     return arregloModificado;
// };

// var arreglo = [1, 2, 3, 4, 5];
// var nuevoArreglo = arreglo.mayoresQueTres();

// console.log(nuevoArreglo);


class LatinoAmerica {
    constructor() {
        this.paises = []
    }
}

LatinoAmerica.prototype.agregarPais = function(pais) {
    this.paises.push(pais);
}

var continente = new LatinoAmerica();
continente.agregarPais('Mexico');
console.log(continente.paises);


//Los prototipos le permiten a los objetos de javascript heredar propiedades y metodos a otros elementos, como por ej, a otros objetos.
// Los prototipos son un mecanismo por el cual todos los objetos o elementos de Javascript pueden extender sus propiedades y métodos.
// El proceso en el que los objetos globales de JavaScript le extienden métodos y propiedades a cualquier tipo de dato se denomina herencia. 
var libro = { autor: 'Borges', genero: 'Policial', año: 1990};
var tienePropiedad = libro.hasOwnProperty ('autor');
// console.log(tienePropiedad);

var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

var mundo = {continentes: 7, paises: 195, oceanos: 5};
for(var prop in mundo){
    console.log('Esta es la propiedad: '+ prop);
    console.log('Este es el valor: ' + mundo[prop]);
}

// for sirve solo UNICAMENTE para recorrer arreglos, elemento por elemento
// For in sirve unicamente para recorrer objetos propiedad por propiedad.

var mascota = {animal: 'Perro',
    raza: 'Ovejero Aleman', 
    amistoso: true, 
    dueña: 'Maria Lopez',
    info: function() {
        console.log('Mi perro es un ' + this.raza)
    },
};
mascota.info();
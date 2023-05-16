var deportes = {
    conBalon: ['Football','Basketball','Rugby'],
    sinBalon: ['Boxeo','Surf','Trekking']
};

var persona = {nombre: 'Lucas', edad: 26, estudios: { esProgramador: true} }

//console.log(persona.edad);
persona.nombre = 'Martin';
//console.log(persona.nombre);
persona.edad = 32;
//console.log(persona.edad);

var autos = {};
autos.marcas = ['Ford','Audi','Ferrari'];
delete autos.marcas;
//console.log (autos);

var misFunciones = {saludar: function () {
    console.log('Hola');
},
};
misFunciones.saludar();

var atuendos = {manos: ['Guantes','Anillos'], pies: ['zapatos','soquetes']};
// console.log(atuendos.manos);

atuendos['Piernas'] = ['Bermudas', 'Pantalos'];
//console.log(atuendos);

var comidas = {};
var diferenciaDeNotacions = function (propUno, propDos) {
    comidas[propUno] = ['Frutas','Vegetales']
    comidas[propDos] = ['Hamburguesas','Papas Fritas'];
};
diferenciaDeNotacions('saludable', 'noSaludable');
//console.log(comidas);
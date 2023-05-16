//var listaDeCompras = [];
//listaDeCompras [3] = 'Tomates';
//listaDeCompras [1] = 'Lechugas';

//console.log(listaDeCompras.length);
//console.log(listaDeCompras);
//listaDeCompras[1];

//var elementosDelArray = listaDeCompras [1];
//console.log(elementosDelArray);

//var colores = ['amarillo' , 'azul'];
//colores.push ('rojo');  //pone el elemento al final de la lista
//colores.unshift ('verde'); //pone el elemento al inicio de la lista
//colores.pop()  //borra el ultimo elemento de la lista
//colores.shift(); //borra el primer elemento de la lista
//console.log (colores);

// var pintores = ['Picasso' , 'velazquez' , 'van Gogh', 'Dali'];
// var incluyeDali = pintores.includes ('Monet');
// console.log (incluyeDali);

// var numeros = [10,6,8,9];
// var cumpleCondicion = numeros.every((num) => {
//     return num>5;
// });
// console.log (cumpleCondicion);

// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');
// palabraSeparada.pop();
// palabraSeparada.push('y');
// //console.log(palabraSeparada);

// var palabraArreglada = palabraSeparada.join('');
// console.log(palabraArreglada);

var numeros = [1,2,3,4];
// numeros.forEach ((num) => console.log(num));
// numeros.forEach((num) => {
//     if (num===3){
//         console.log(num);
//     }
// });

var masUno = numeros.map ((num) => {
    return num + 1;
});
console.log(masUno);
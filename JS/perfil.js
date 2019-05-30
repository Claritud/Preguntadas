
// puntaje

let puntaje = 0;

const actualizarPuntaje = function() {
    puntaje += puntaje;
    return puntaje
}

const mostrarPuntajeActualizado = function() {
    puntaje = actualizarPuntaje();
    //aca faltaria ver donde se muestra
}


// // -------------------------pero lo hago asi ahora!!!!!
// const obtenerPreguntas = funcion(){
//     let preguntas = [
//          "aca hago preguntas",
//          "Otra pregunta",
//          "otra pregunta mas"
//          ]
//     return preguntas; // aca devuelve el valor (osea todas las preguntas)

// }

// //como la variable se destruye lo que hago es utilizar la fincion para obtener el valor
// //
// const mostrarPregunta = function(){
//     let preguntas = obtenerPreguntas();

//     for(let i=0; i <preguntas.length; i++){
//          //mostrar pregunta en html
//          console.log(preguntas[i]);
//     }
// }

// nivel
let nivel = 1;
const actualizarNivel = function(){
    let 

    for(i=1; puntaje<= 100; )

//aca tengo que poner que segun el puntaje que tenga pase de nivel
}

const mostrarNivelActualizado = function(){
    nivel = actualizarNivel();
    // aca falta poner como y donde se mostraria
}

// nombre usuario
const nombreUsuario = function() {

}

const mostrarNombreUsuario = function() {

}

// SEGUIDORES

const actualizarSeguidores = function() {

}

const mostrarSeguidoresActualizados = function() {

}

// SEGUIDOS

const actualizarSeguidos = function() {

}

const mostrarSeguidosActualizados = function() {

}


// NOTIFICACIONES

const actualizarNotificaciones = function() {

}

const mostrarNotificacionesActualizadas = function(){

}

// DESLOGUEARSE

const desloguarse = function(){

}


//---------------------------PARA EL RANKING

const mostrarRankings = function(){
    let rankings = obtenerRankings(); // ponele que aca busca la info (eso es un ejemplo)
}

// si hacemos esto no podriamos separar todos los elementos que devuelve
// Se obtiene un conjunto de datos
// para esto necesitamos arreglos o arrays, esto es una estructura de datos
// es un conjunto de daros estructurados de alguna forma.
// ciertos valores estructurados de alguna forma.
// se organizan de izquierda a derecha de forma horizontal.
// Es ordenado, primero vienen el primer item luego el segundo.. etc

// como se declara un arrays? se declara una variable y se pone entre []; 
// puede estar vacio o si quiero declarar elementos se ponen dentro de los corchetes entre comas
// los valores que se le pueden poner son strings, numeros,  uleanos.. etc



let rankings = ["pablo", "sabri", "Meli", "marian"];

let animales = ["gato", "perro", "tortuga"];

let decadas = [1900, 1920, 1930, 1940];

console.log(rankings);

// los datos que estan adentro tienen que tener la misma relacion.
// al mostrarse en consola se ordena de 0 a el numero que tengo de cosas


//para obtener los elementos (valores)

//arrays[indice] el nombre de la variable y en corchetes el numero 

console.log(rankings[2]);
let numero = 2;
console.log(rankings[numero]);// se puede poner una variable si la variable es un numero.

// si accedemos a una posicion y le reasigno un valor puede remplazarlo
// patra cambiar el valor de un elemento. 
//arrays[indice] = nuevoValor;

rankings[0] = "caro";

// si el indice no existe lo agrega
// tenia de 0 a 3 antes con lo cual esta lo agrega
// si pongo un numeor mas grande y hay vacios en el medio , aoarecen como vacios y si quiero verlo 
//todas las que esten vacias aparece undifined
rankings[4] = "caro";

// el length en los arrays es la cantidad de items

// en javascript los strings son arrays de caracteres!!!!!!!!!
let neme = "pablo";
console.log(nombre[2]);
// en consola apareceria la letra b 

// cuando tengo mil elementos y quiero mostrarlos utilizo un bucle for
// en vez de poner uno abajo del otro con el numero(indice) correspondiente
//hago esto

console.log(rankings);
console.log(rankings.length);

for(i=0; i<4; i++) {
    console.log(rankings[i]);
}

//porque el length es la cantidad de elementos(interar sobre una arrays) 

for(i=0; i<rankings.length; i++) {
    console.log(`${i+1}) ${rankings[i]}`);
}

// aca imprimiria con el numero adelante

// estas van a ser las listas que necesitamos
//rankings(usuarias, dasafios,categorias),
// seguidoras, preguntas, respuestas, notificaciones,competencias

const obtenerPreguntas = funcion(){
    let preguntas = obtenerPreguntasdeBasededatos(); // esto seria lo ideal



}

// -------------------------pero lo hago asi ahora!!!!!
const obtenerPreguntas = funcion(){
    let preguntas = [
         "aca hago preguntas",
         "Otra pregunta",
         "otra pregunta mas"
         ]
    return preguntas; // aca devuelve el valor (osea todas las preguntas)

}

//como la variable se destruye lo que hago es utilizar la fincion para obtener el valor
//
const mostrarPregunta = function(){
    let preguntas = obtenerPreguntas();

    for(let i=0; i <preguntas.length; i++){
         //mostrar pregunta en html
         console.log(preguntas[i]);
    }
}


















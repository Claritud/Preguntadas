



// ---------nombre usuario
const nombreUsuario = function() {

}

const mostrarNombreUsuario = function() {

}



// puntaje tal vez aca iria otra funcion que seria la de las preguntas y el puntaje
//que generan las respuestas
//---------------------Puntaje/Nivel
let puntaje = 0;

const actualizarPuntaje = function() {
    puntaje += puntaje;
    return puntaje
}

const mostrarPuntajeActualizado = function() {
    puntaje = actualizarPuntaje();
    //aca faltaria ver donde se muestra
}

// -----------------------nivel
// casda vez que termina una pregunta se tiene uqe actualizar el puntaje y el nivel 

let nivel = 0;
let parametroPuntaje = 100;
const actualizarNivel = function(){
    nivel = 1;
    parametroPuntaje = 100;
    if (puntaje > parametroPuntaje){ 
        nivel++;
        parametroPuntaje+=100;
    }
   return nivel, parametroPuntaje;
    
  //aca tengo que poner que segun el puntaje que tenga pase de nivel
}
console.log(nivel);
// const actualizarNivel = function(){
//     let niveles = [
//         "Nivel 1",
//         "Nivel 2",
//         "Nivel 3"
//     ]
//     return niveles;
// }
// preguntar si esta corriendo todo el tiempo, porque si es asi si tiene
// sentido hacer el for porque se actualizaria en cuanto llegue al parametro

const mostrarNivelActualizado = function(){
    nivel = actualizarNivel();
    // aca falta poner como y donde se mostraria
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















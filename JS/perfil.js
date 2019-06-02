

// NOTIFICACIONES
// aca deberia catuilizar diferentes cosas
// parametros function(cambios de nivel, invitaciones, nuevos segudores, cambios en ranking)

const actualizarNotificaciones = function() { 
    let notificaciones = [
        "Te sigue Lorem ipsum dolor sit amet consectetur adipisicing elit",
        "Invitacion a Lorem ipsum dolor sit amet consectetur adipisicing elit",
        "Tu puesto en el ranking Lorem ipsum dolor sit amet consectetur adipisicing elit",
        "Pasaste al nivel Lorem ipsum dolor sit amet consectetur adipisicing elit"
    ]
    return notificaciones;

}

const mostrarNotificacionesActualizadas = function(){
    notificaciones = actualizarNotificaciones();
    let contenedorNotificaciones = document.getElementById("notificaciones-actualizadas");
    contenedorNotificaciones.classList.toggle("lista-notificaciones");

    for (i=0; i < notificaciones.length; i++) {
        contenedorNotificaciones.innerHTML += `</br> * ${notificaciones[i]}`;//que pedo suma mil
    }
}


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



// DESLOGUEARSE

const desloguarse = function(){

     // Lo que tiene que hacer es perder los datos del login como?????

    //aca tiene que volver a la pagina de login eso ya lo hac eocn el click porque tiene una ruta relativa
   

}

const cambiarFondo = function(){
    // aca el fondo va cambiando acaorde a el nivel que hay 
    // nivel${i}.png
}

















//--------------------------- NOTIFICACIONES

// aca deberia catuilizar diferentes cosas
// parametros function(cambios de nivel, invitaciones, nuevos segudores, cambios en ranking)
//ver aca porque sigue sumando todaslas notificaciones
//ver is hago tipo notificcacionesAnteriores !== nuevasNotificaciones o algo asi

const actualizarNotificaciones = function() { 
    
    fetch("https://preguntadas.herokuapp.com/v1/notifications", {
        headers: {
            "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsYXJhIiwiaWF0IjoxNTU5ODMzMjc0fQ.68TBTq9gv2iQVtrfs4sZ_kvYCfiTeBew6NsV8mzrRZA"
        },
        method: "get",
   }).then(function(result) {
        return result.json();
   }).then(function(result) {

       mostrarNotificacionesActualizadas(result.notifications);
   
   }).catch(function(error) {
   
   });
}


const mostrarNotificacionesActualizadas = function(notificaciones){
    let contenedorNotificaciones = document.getElementById("notificaciones-actualizadas");
    contenedorNotificaciones.classList.toggle("lista-notificaciones");

    if (notificaciones.length >= 0){

        for (i=0; i < notificaciones.length; i++) {
            contenedorNotificaciones.innerHTML += ` 💬 ${notificaciones[i]} </br>`;
        }

    } else {
        contenedorNotificaciones.innerHTML = ` 💬 No tiene notificaciones nuevas`;
    }  
}


// poner boton para borrar notificaciones

// ------------------------- INFO USUARIO
// parametros de nombre de usuario como cantidad de caracteres.

const obtenerInfoUsuaria = function(){

    fetch("https://preguntadas.herokuapp.com/v1/users/ada", {
        headers: {
            "Authorization": "eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8vdG9wdGFsLmNvbS9qd3RfY2xhaW1zL2lzX2FkbWluIjp0cnVlLCJjb21wYW55IjoiVG9wdGFsIiwiYXdlc29tZSI6dHJ1ZX0"
        },
        method: "get"
   }).then(function(result) {
        return result.json();
   }).then(function(result) { 
        
        mostrarInfoUsuaria(result.user.username);

        // let contenedorNombreUsuaria = document.getElementById("nombre-usuario");
        // contenedorNombreUsuaria.innerHTML = result.user.username;
    
   }).catch(function(error) {
   
   });

}
// obtenerInfoUsuaria();

const mostrarInfoUsuaria = function(nombreUsuario){
    let contenedorNombreUsuaria = document.getElementById("nombre-usuario");
    contenedorNombreUsuaria.innerHTML = nombreUsuario;

}
obtenerInfoUsuaria();



// puntaje tal vez aca iria otra funcion que seria la de las preguntas y el puntaje
//que generan las respuestas
//-----------------------------PUNTAJE/NIVEL

let puntaje = 0;

const actualizarPuntaje = function() {
    puntaje += puntaje;
    return puntaje
}

const mostrarPuntajeActualizado = function() {
    puntaje = actualizarPuntaje();
    let contenedorPuntaje = document.getElementById("puntaje-usuario");
    contenedorPuntaje.innerHTML = puntaje;
}
mostrarPuntajeActualizado();

// -----------------------NIVEL
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

// console.log(nivel);
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


// ------------------------------SEGUIDORES

const actualizarSeguidores = function() {
    let misSeguidores = [
        "Albertita",
        "Albertota",
        "Albertuta",
        "Albertulota"
    ]
    return misSeguidores;
}

const mostrarNumeroSeguidores = function(){
    misSeguidores = actualizarSeguidores();
    let numeroSeguidores = document.getElementById("num-seguidores");
    numeroSeguidores.innerHTML = misSeguidores.length;
    console.log(misSeguidores.length);
}

const mostrarSeguidores = function() {
    misSeguidores = actualizarSeguidores();
    let contenedorSeguidores = document.getElementById("popup-seguidores");
    contenedorSeguidores.classList.add("seguidores-visible");

    for (i=0; i < misSeguidores.length; i++) {
        contenedorSeguidores.innerHTML += ` 💭 ${misSeguidores[i]} </br>`;
    }  
}

const ocultarSeguidores = function(){
    let contenedorSeguidores = document.getElementById("popup-seguidores");
    contenedorSeguidores.classList.remove("seguidores-visible");
}

// ---------------------------------SIGUIENDO

const actualizarSiguiendo = function() {
    let aQuienSigo = [
        "Josefa",
        "Josefita",
        "Josefota",
        "Joseluta"
    ]
    return aQuienSigo;
}

const mostrarNumeroSiguiendo = function(){

}

const mostrarSiguiendo = function() {
    aQuienSigo = actualizarSiguiendo();
    let contenedorSiguiendo = document.getElementById("popup-siguiendo");
    contenedorSiguiendo.classList.add("siguiendo-visible");

    for (i=0; i < aQuienSigo.length; i++) {
        contenedorSiguiendo.innerHTML += ` 🗯️ ${aQuienSigo[i]} </br>`;
    } 

}

const ocultarSiguiendo = function(){
    let contenedorSiguiendo = document.getElementById("popup-siguiendo");
    contenedorSiguiendo.classList.remove("siguiendo-visible");
}

// ---------------------------------DESLOGUEARSE

// Lo que tiene que hacer es perder los datos del login como?????
//aca tiene que volver a la pagina de login eso ya lo hac eocn el click porque tiene una ruta relativa
const desloguarse = function(){

}


//-------------------------------CAMBIAR FONDO

//como accader al javascript porque la imagen esta como imagen de fondo
// solo si el nivel aparece como numero 
const cambiarFondo = function(){
    nivel = actualizarNivel();
    let cambiarFondoNivel = document.getElementById("fondo");

    // aca el fondo va cambiando acaorde a el nivel que hay 
    // nivel${i}.png
}















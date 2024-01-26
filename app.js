// let parrafo = document.querySelector('p');
// parrafo.innerHTML = "Just do it";
let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;



console.log(numeroSecreto)


function agregarTextoHtml(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarUsuario(){
    let numeroUsuario = parseInt(document.getElementById('numeroUser').value);
    //console.log(numeroSecreto === numeroUsuario);
    if(numeroSecreto == numeroUsuario){
        agregarTextoHtml('p', `acertaste el numero secreto ${numeroSecreto} en ${intentos} ${intentos === 1 ? "vez":"veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > numeroUsuario){
            agregarTextoHtml('p',`el numero secreto es mayor al que indicaste: ${numeroUsuario}`)
        }else{
            agregarTextoHtml('p',`el numero secreto es menor al que indicaste: ${numeroUsuario}`)
        }
        intentos++;
        limpiarCaja();
    }

}

function limpiarCaja(){
    // let valorCaja = document.getElementById('numeroUser');
    // valorCaja.value = ""
    document.querySelector('#numeroUser').value = "";
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()* numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    //si ya sorteamos todos los mundos
    if(listaNumerosSorteados.length == numeroMaximo){
        agregarTextoHtml('p','se sortearon todos los numeros posibles');
    }else{
        //si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesInciales(){
    agregarTextoHtml('h1', "Bienvenido a este genial juego");
    agregarTextoHtml('p', `encuentra el numero secreto que va del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //generar el numero secreto aleatorio
    //indicar mensaje de intervalo de numeros
    //inicializar el nro de intentos
    condicionesInciales();
    //deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    
}

condicionesInciales();

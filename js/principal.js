
let resultados = document.getElementById('resultados');
let candidatos = document.getElementById('containerCandidatos');
let btnJairo = document.getElementById('btnJairo');
let contadorJairo = document.getElementById('contadorJairo');
let btnCristian = document.getElementById('btnCristian');
let contadorCristian = document.getElementById('contadorCristian');
let btnHugo = document.getElementById('btnHugo');
let contadorHugo = document.getElementById('contadorDeHugo');
let btnAlvaro = document.getElementById('plancha');
let contadorAlvaro = document.getElementById('contadorAlvaro');
let btnVotoBlanco = document.getElementById('btnBlanco');
let contadorBlanco = document.getElementById('contadorBlanco');
let totalVotos = document.getElementById('contadorTotales');


document.addEventListener("DOMContentLoaded", function() {
    contadorDanilo.textContent = '1899';
});



btnJairo.addEventListener('click', sumarJairo);
function sumarJairo(){
    resultados.style.display = 'block';
    candidatos.style.display = 'none';
    let valorActualJairo = parseInt(contadorJairo.textContent); 
    contadorJairo.textContent = valorActualJairo + 1;
}

btnCristian.addEventListener('click', sumarCristian);
function sumarCristian(){
    resultados.style.display = 'block';
    candidatos.style.display = 'none';
    let valorActualCristian = parseInt(contadorCristian.textContent);
    contadorCristian.textContent = valorActualCristian + 1;
}

btnHugo.addEventListener('click', sumarHugo);
function sumarHugo(){
    resultados.style.display = 'block';
    candidatos.style.display = 'none'
    let valorActualHugo = parseInt(contadorHugo.textContent);
    contadorHugo.textContent = valorActualHugo + 1;
}
btnAlvaro.addEventListener('click', sumarAlvaro);
function sumarAlvaro() {
    resultados.style.display = 'block';
    candidatos.style.display = 'none'
    let actualAlvaro = parseInt(contadorAlvaro.textContent);
    contadorAlvaro.textContent = actualAlvaro + 1;
    total();
}
btnVotoBlanco.addEventListener('click', sumarBlanco);
function sumarBlanco() {
    resultados.style.display = 'block';
    candidatos.style.display = 'none'
    let actualBlanco = parseInt(contadorBlanco.textContent);
    contadorBlanco.textContent = actualBlanco + 1;
    total();
}

function total(){
    let actualTotal = parseInt(totalVotos.textContent);
    totalVotos.textContent = actualTotal + 1;
}

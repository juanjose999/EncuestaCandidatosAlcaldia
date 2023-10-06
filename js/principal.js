let contadorDanilo = document.getElementById('contadorDanilo')
let btnSumaDanilo = document.getElementById('danilo');
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

resultados.style.display = 'none';

// Agrega un evento táctil al elemento en JavaScript
document.getElementById('candidato1').addEventListener('touchstart', function() {
    this.classList.add('active');
});

// Elimina la clase 'active' cuando se levanta el dedo
document.getElementById('candidato1').addEventListener('touchend', function() {
    this.classList.remove('active');
});
document.addEventListener("DOMContentLoaded", function() {
    contadorDanilo.textContent = '0';
});

btnSumaDanilo.addEventListener('click', sumaDanilo);

function sumaDanilo() {
    resultados.style.display = 'block';
    candidatos.style.display = 'none'
   let valorActual = parseInt(contadorDanilo.textContent);
   contadorDanilo.textContent = valorActual + 1;
   console.log('Contador Danilo:', contadorDanilo.textContent)
}

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
}
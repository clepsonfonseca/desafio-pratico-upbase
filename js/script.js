/* Relógio */

const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
  }
  
  setInterval(() => {
    getHours()
  }, 1000)

/* Preenchimento de Perfil */  

const h2=
document.querySelector("h2");

h2.onclick = function() {
    const userName = prompt ("Qual o seu Nome?");

h2.textContent = `${userName}`;

const h3=
document.querySelector("h3");

h3.onclick = function() {
    const userName = prompt ("Qual a sua cidade?");

h3.textContent = `${userName}`;

 }

 var img = document.querySelector("#perfil");
img.setAttribute('src', 'assets/Clepson Fonseca.png');

}

/* Completar Perfil - Alert */ 

function funcao1()
{
alert("Completar perfil: Preencha suas informações para encontrar pacientes.");
}


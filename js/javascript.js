let shaw = document.querySelector("#particles-js")
let vermelho = document.querySelector(".back-vermelho")
let azul = document.querySelector(".back-azul")
let luz = document.querySelector(".back-luz")
let botao = document.querySelector(".botao")
const lista = ["back-azul","back-vermelho","back-abismo", "back-palido","back-luz", "back-zote"]
let index = 0;
  var audio = new Audio("js/hollow.mp3");
  audio.volume = 0.065;
  audio.loop = true

function isplaying(value) {
   return !value.paused;
}

botao.addEventListener("click", () => {
  const next = (index + 1) % lista.length;
  shaw.classList.replace(lista[index], lista[next]);
  index = next;

    if(isplaying){
        audio.play();
    }
  
});
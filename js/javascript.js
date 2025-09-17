let shaw = document.querySelector("#particles-js")
let vermelho = document.querySelector(".back-vermelho")
let azul = document.querySelector(".back-azul")
let luz = document.querySelector(".back-luz")
let botao = document.querySelector(".botao")

const lista = ["back-azul","back-vermelho","back-abismo", "back-palido","back-luz", "back-zote"]
const listaThumbnailUm = ["Imagens/KnightNightmares.png","Imagens/KnightAbismo.png","Imagens/KnightLife.png", "Imagens/KnightPanteao.png","Imagens/zote.png", "Imagens/KnightEncruzilhada.png"]
const listaThumbnailDois = ["Imagens/KnightThumb2Hornet.png","Imagens/KnightThumb2Abyss.webp","Imagens/CityOfTears.png", "Imagens/Tec2.png","Imagens/VoidPanteao.png", "Imagens/KnightThumb2Intro.avif"]

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
  document.querySelector(".thumbUm").src=listaThumbnailUm[index];
  if(listaThumbnailUm[index] == 4){
    document.querySelector("opaco").style.opacity='0.7';
  }
  document.querySelector(".thumbDois").src=listaThumbnailDois[index];
  index = next;

    if(isplaying){
        audio.play();
    }
  
});
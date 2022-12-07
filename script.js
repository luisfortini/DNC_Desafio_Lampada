var imgLampada = document.getElementById("img_lampada")

function estaQuebrada(){
  return imgLampada.src.indexOf('quebrada') > 1
}

function Ligar(){
  if(!estaQuebrada())
  imgLampada.src = './images/lampada_acessa.svg'
}

function Desligar(){
  if(!estaQuebrada())
  imgLampada.src = './images/lampada_apagada.svg'
}

imgLampada.addEventListener('click', Quebrar)
function Quebrar(){
  imgLampada.src = './images/lampada_quebrada.svg'
}
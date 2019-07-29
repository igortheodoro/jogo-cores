/* Início da configuração dos botões de dificuldade */
var facil = document.querySelector(".facil")
var dificil = document.querySelector(".dificil")

var cor1 = document.querySelector(".cor1")
var cor2 = document.querySelector(".cor2")
var cor3 = document.querySelector(".cor3")
var cor4 = document.querySelector(".cor4")
var cor5 = document.querySelector(".cor5")
var cor6 = document.querySelector(".cor6")

/* Botão fácil */
facil.addEventListener("click", function funcfacil(){

    cor1.style.background = corAleatoria()
    cor2.style.background = corAleatoria()
    cor3.style.background = corAleatoria()
    cor4.style.background = corAleatoria()
    cor5.style.background = corAleatoria()
    cor6.style.background = corAleatoria()

    backgroundTop.style.color = "#343a40"

    h1.textContent = "A cor é: "

    cor1.style.height = "300px"
    cor2.style.height = "300px"
    cor3.style.height = "300px"
    cor1.style.width = "25%"
    cor2.style.width = "25%"
    cor3.style.width = "25%"
    cor1.style.display = "block"
    cor2.style.display = "block"
    cor3.style.display = "block"
    cor4.style.display = "none"
    cor5.style.display = "none"
    cor6.style.display = "none"
    facil.style.color = "#04c4ff"
    facil.style.borderRadius = "0px"
    dificil.style.background = "none"
    dificil.style.color = "black"

    quadradoCor = [cor1, cor2, cor3]
    quadradoSorteado
    colors
    sorteio

    labelCor.textContent = sorteio;

    quadradoSorteado.style.background = sorteio;

})

/* Botão Difícil */
dificil.addEventListener("click", function funcdificil(){

    cor1.style.background = corAleatoria()
    cor2.style.background = corAleatoria()
    cor3.style.background = corAleatoria()
    cor4.style.background = corAleatoria()
    cor5.style.background = corAleatoria()
    cor6.style.background = corAleatoria()

    backgroundTop.style.color = "#343a40"
    
    quadradoCor = [cor1, cor2, cor3, cor4, cor5, cor6]
    quadradoSorteado 
    colors
    sorteio

    h1.textContent = "A cor é: "

    labelCor.textContent = sorteio;

    quadradoSorteado.style.background = sorteio;

    cor1.style.height = "150px"
    cor2.style.height = "150px"
    cor3.style.height = "150px"
    cor1.style.width = "20%"
    cor2.style.width = "20%"
    cor3.style.width = "20%"
    cor1.style.display = "block"
    cor2.style.display = "block"
    cor3.style.display = "block"
    cor4.style.display = "block"
    cor5.style.display = "block"
    cor6.style.display = "block"
    dificil.style.color = "#04c4ff"
    dificil.style.borderRadius = "0px"
    facil.style.background = "none"
    facil.style.color = "black"

})


/* Configuração da lógica do game, estilos e funcionalidade dos cliques. */
var quadradoCor = [cor1, cor2, cor3, cor4, cor5, cor6]

cor1.style.background = corAleatoria()
cor2.style.background = corAleatoria()
cor3.style.background = corAleatoria()
cor4.style.background = corAleatoria()
cor5.style.background = corAleatoria()
cor6.style.background = corAleatoria()

var quadradoSorteado = quadradoCor[(Math.random() * quadradoCor.length) | 0]
var colors = gerarCores(66)


function gerarCores(num){
    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(corAleatoria())
    }

    return arr;
}

function corAleatoria(){

  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)

  return "rgb(" + r + ", " + g + ", " + b + ")"

}

var sorteio = colors[(Math.random() * colors.length) | 0]
var labelCor = document.querySelector("#codigoRgb")
var coresClick = document.querySelectorAll(".botaoCores")

labelCor.textContent = sorteio;

quadradoSorteado.style.background = sorteio;

for (var i = 0; i < coresClick.length; i++){

    var h1 = document.querySelector("h1");
    var backgroundTop = document.querySelector(".uppercase");

    coresClick[i].addEventListener("click", function game(){
        
        if (this === quadradoSorteado){
            h1.textContent = "Você acertou a cor!"
            backgroundTop.style.color = sorteio
                if(cor3.style.height == "300px"){
                    cor1.style.display = "block"
                    cor2.style.display = "block"
                    cor3.style.display = "block"
                    cor1.style.background = sorteio
                    cor2.style.background = sorteio
                    cor3.style.background = sorteio
                }else{
                    cor1.style.display = "block"
                    cor2.style.display = "block"
                    cor3.style.display = "block"
                    cor4.style.display = "block"
                    cor5.style.display = "block"
                    cor6.style.display = "block"
                    cor1.style.background = sorteio
                    cor2.style.background = sorteio
                    cor3.style.background = sorteio
                    cor4.style.background = sorteio
                    cor5.style.background = sorteio
                    cor6.style.background = sorteio
                }
        }else if(backgroundTop.style.color !== sorteio){
            this.style.display = "none";
        }
    })
}

/* Configuração botão Tentar Novamente */
var tentarNov = document.querySelector(".botaoTry")

tentarNov.addEventListener("click", function (){

    cor1.style.background = corAleatoria()
    cor2.style.background = corAleatoria()
    cor3.style.background = corAleatoria()
    cor4.style.background = corAleatoria()
    cor5.style.background = corAleatoria()
    cor6.style.background = corAleatoria()

    labelCor.textContent = sorteio;
    quadradoSorteado.style.background = sorteio;
    h1.textContent = "A cor é: "
    backgroundTop.style.color = "#343a40"
 
 
    if (cor3.style.height == "300px"){
        cor1.style.display = "block"
        cor2.style.display = "block"
        cor3.style.display = "block"
        cor4.style.display = "none"
        cor5.style.display = "none"
        cor6.style.display = "none"
    }else {
        cor1.style.display = "block"
        cor2.style.display = "block"
        cor3.style.display = "block"
        cor5.style.display = "block"
        cor6.style.display = "block"
        cor4.style.display = "block"
    }
})

/* Configuração botão Novas Cores */
var novasCores = document.querySelector(".botaoNew")

novasCores.addEventListener("click", function (){
    sorteio = colors[(Math.random() * colors.length) | 0];
    quadradoSorteado = quadradoCor[(Math.random() * quadradoCor.length) | 0]

    cor1.style.background = corAleatoria()
    cor2.style.background = corAleatoria()
    cor3.style.background = corAleatoria()
    cor4.style.background = corAleatoria()
    cor5.style.background = corAleatoria()
    cor6.style.background = corAleatoria()

    labelCor.textContent = sorteio;
    quadradoSorteado.style.background = sorteio;
    h1.textContent = "A cor é: "
    backgroundTop.style.color = "#343a40"

    if (cor3.style.height == "300px"){
        cor1.style.display = "block"
        cor2.style.display = "block"
        cor3.style.display = "block"
        cor4.style.display = "none"
        cor5.style.display = "none"
        cor6.style.display = "none"
    }else {
        cor1.style.display = "block"
        cor2.style.display = "block"
        cor3.style.display = "block"
        cor5.style.display = "block"
        cor6.style.display = "block"
        cor4.style.display = "block"
    }

})
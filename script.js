/* Configuração do Modal */

var modalPerfil = document.querySelector("#modalPerfil")
var btnPerfil = document.querySelector("#btnPerfil")
var nome = document.querySelector("#perfil")
var digNome = document.querySelector("#setNome")
var localPerfil = document.querySelector("#localPerfil")

modalPerfil.style.display = "block"
nome.focus()

btnPerfil.addEventListener("click", function(){
    if(nome.value !== "" && nome.value.length <= 8){
        modalPerfil.style.display = "none"
    }else{
        digNome.style.color = "#dc3545"
        digNome.style.fontWeight = "400"
        btnPerfil.classList.add("btn-danger")
    }
    localPerfil.innerHTML = '<i class="fas fa-user-circle"></i> ' + nome.value
})

/* Configuração da pontuação */

var positivo = 5
var negativo = 0
var result = 0
var resultadoFinal = document.querySelector("#resultado")

function pontGame(){
    positivo++
    result = positivo-negativo
    if (result < 0){
        resultadoFinal.textContent = 'Pontuação negativa.'
    }else{
        resultadoFinal.textContent = 'Pontos: ' + result
    }

}




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
facil.addEventListener("click", function(){

    quadradoCor.splice(3,4)
    sorteio = colors[(Math.random() * colors.length) | 0];
    quadradoSorteado = quadradoCor[(Math.random() * quadradoCor.length) | 0]

    cor1.style.background = corAleatoria()
    cor2.style.background = corAleatoria()
    cor3.style.background = corAleatoria()

    labelCor.textContent = sorteio;
    quadradoSorteado.style.background = sorteio;
    h1.textContent = "A cor é: "
    backgroundTop.style.color = "#343a40"


    backgroundTop.style.color = "#343a40"

    h1.textContent = "A cor é: "

    cor1.style.height = "300px"
    cor2.style.height = "300px"
    cor3.style.height = "300px"
    cor1.style.width = "20%"
    cor2.style.width = "20%"
    cor3.style.width = "20%"
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

})

/* Botão Difícil */
dificil.addEventListener("click", function(){

        
    quadradoCor = [cor1, cor2, cor3, cor4, cor5, cor6]
    quadradoSorteado = quadradoCor[(Math.random() * quadradoCor.length) | 0];
    colors
    sorteio


    cor1.style.background = corAleatoria()
    cor2.style.background = corAleatoria()
    cor3.style.background = corAleatoria()
    cor4.style.background = corAleatoria()
    cor5.style.background = corAleatoria()
    cor6.style.background = corAleatoria()

    backgroundTop.style.color = "#343a40"
    h1.textContent = "A cor é: "

    labelCor.textContent = sorteio;

    quadradoSorteado.style.background = sorteio;

    cor1.style.height = "150px"
    cor2.style.height = "150px"
    cor3.style.height = "150px"
    cor1.style.width = "15%"
    cor2.style.width = "15%"
    cor3.style.width = "15%"
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
var colors = gerarCores(150)


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
            pontGame()


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
            negativo++;
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

const newColorsBtn = novasCores.addEventListener("click", function(){

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

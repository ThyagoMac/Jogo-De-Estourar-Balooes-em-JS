window.onload = function () {
    var velocidade = 1;
    velocidade = prompt("Digite a velocidade em segundos que será criado os baloes. ATENÇÃO!!! NÃO UTILIZE VIRGULA(,) E SIM PONTO(.) PARA DEFINIR FRAÇÕES DE SEGUNDO!!! ");
    velocidade = velocidade * 1000;
    setInterval(criarbalao, velocidade);
    console.log("velocidade: " + velocidade);
};
var contador = 0;
var div = 0;

function criarbalao() {
    var contador = 0;
    var bola = document.createElement("div");
    bola.setAttribute("class", "balao");
    var positionX = Math.floor(Math.random() * 900);
    var positionY = Math.floor(Math.random() * 800);
    var cor = Math.floor(Math.random() * (999999 - 202020 + 1) + 202020);
    bola.setAttribute("style", "left:" + positionX + "px;" + "top:" + positionY + "px;" + "background-color: #" + cor + ";transition: opacity .2s ease;");
    bola.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(bola);
    div++;
    document.getElementById("espan2").innerHTML = ("Numero de balões: " + div);
    
    if (div > 5) {
        alert("Voçê é um LOOOOOOOSER!!!");
        location.reload();
    }
}

function estourar(bolha) {
    contador = contador + 1;
    document.getElementById("espan").innerHTML = ("Estourados: " + contador);
    document.body.removeChild(bolha);
    if (contador == 10) {
        alert("Voçê vençeu!!!");
        location.reload();
    }
    div--;
    document.getElementById("espan2").innerHTML = ("Numero de balões: " + div);
}
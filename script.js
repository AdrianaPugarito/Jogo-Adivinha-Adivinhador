var numeroPensado = Math.round(Math.random() * 50);
console.log(numeroPensado);
var chute = parseInt(document.getElementById("valor").value);
console.log(chute);

var resultado = document.getElementById("resultado");

function Chute() {
  if (chute == numeroPensado) {
    resultado.innerHTML = "Parabéns, você acertou";
  } else {
    resultado.innerHTML = "Errou, o número secreto era " + numeroPensado;
  }
}

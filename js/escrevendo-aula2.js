

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual o comando que lista os arquivos de um diretório no GitBash?");
  if ((nome == "ls")) {
    alert("O " + nome + ", serve para listar os arquivos em um diretório. Parabéns você acertou!");
 
  } else {
    alert("O " + "ls" + ", serve para listar os arquivos em um diretório. Que pena..., você errou a questão!");
  }  
  
  window.location="aula3.html";
}

var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual o comando para visualizar informações sobre o repositório?");
  if ((nome == "git status")) {
    alert("O " + nome + ", serve para visualizar informações sobre o diretório. Parabéns você acertou!");
 
  } else {
    alert("O " + "ls" + ", serve para visualizar informações sobre o diretório. Que pena..., você errou a questão!");
  }  
  
  window.location="aula3.html";
}

document.addEventListener('DOMContentLoaded', function() {
  const botaoMenu = document.querySelector('.botaoMenu');
  const menuOverlay = document.querySelector('.menuOverlay');
  
  // Mostrar/ocultar overlay ao clicar no botão principal
  botaoMenu.addEventListener('click', function(e) {
    e.stopPropagation(); // Impede que o clique se propague
    menuOverlay.classList.toggle('mostrarOverlay');
  });
  
  // Fechar overlay ao clicar em qualquer lugar fora
  document.addEventListener('click', function(e) {
    if (!menuOverlay.contains(e.target) && e.target !== botaoMenu) {
      menuOverlay.classList.remove('mostrarOverlay');
    }
  });
});

function showSemData() {
    const lista = document.querySelector(".listaSemData");
    const items = lista.querySelectorAll("li");

    items.forEach(item => {
      item.style.display = item.style.display === "block" ? "none" : "block";
    });
  }

function showSemana() {
    const lista = document.querySelector(".listaSemana");
    const items = lista.querySelectorAll("li");

    items.forEach(item => {
      item.style.display = item.style.display === "block" ? "none" : "block";
    });
  }

function showProxSemana() {
    const lista = document.querySelector(".listaProxSemana");
    const items = lista.querySelectorAll("li");

    items.forEach(item => {
      item.style.display = item.style.display === "block" ? "none" : "block";
    });
  }

function showDepois() {
    const lista = document.querySelector(".listaDepois");
    const items = lista.querySelectorAll("li");

    items.forEach(item => {
      item.style.display = item.style.display === "block" ? "none" : "block";
    });
  }

function filtrarTarefas() {
  var textoDigitado = document.getElementById("campoPesquisa").value;
  var resultado = document.getElementById("resultado");
  var encontrou = false;
  var textoResultado = "";

  for (var i = 1; i <= 10; i++) {
    var item = document.getElementById("item" + i);

    if (item) {
      if (item.innerHTML.includes(textoDigitado)) {
        textoResultado += "TAREFA ENCONTRADA: " + item.innerHTML + "<br>";
        encontrou = true;
      }
    }
  }

  if (encontrou) {
    resultado.innerHTML = textoResultado;
  } else {
    resultado.innerHTML = "TAREFA NÃO ENCONTRADA!";
  }
}

function criarTarefa(){
  let tarefa = document.getElementById("nome").value;
  let descricao = document.getElementById("descricao").value;
  let data = document.getElementById("data").value;
  let importancia = document.getElementById("importancia").value;

  let novaTarefa ={
    tarefa: tarefa,
    descricao: descricao,
    data: data,
    importancia: importancia
  };

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  if (!tarefa || !descricao || !data || !importancia) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
  tarefas.push(novaTarefa);
  console.log("Nova tarefa criada:", novaTarefa);


  localStorage.setItem("tarefa", tarefa);
  localStorage.setItem("descricao", descricao); 
  localStorage.setItem("data", data);
  localStorage.setItem("importancia", importancia);
  alert("Tarefa criada com sucesso!");
}
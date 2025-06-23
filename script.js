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
// Função para criar uma nova tarefa
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
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  alert("Tarefa criada com sucesso!");
  
  //limpa dps de salvar
  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("data").value = "";
  document.getElementById("importancia").value = "";

}


// Função para exibir as tarefas criadas
function tarefashoje(){
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  let listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = ""; // Limpa a lista antes de exibir as tarefas

  if (tarefas.length === 0) {
    listaTarefas.innerHTML = "<li>Nenhuma tarefa criada.</li>";
    return;
  }

  tarefas.forEach((tarefa, index) => {
    let li = document.createElement("li");
    li.textContent = `Tarefa: ${tarefa.tarefa}, Descrição: ${tarefa.descricao}, Data: ${tarefa.data}, Importância: ${tarefa.importancia}`;
    listaTarefas.appendChild(li);
  }); 
}

function filtrarTarefas() {
  const select = document.querySelector("#filtroImportancia");
  const valorSelecionado = select.value;
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa) => {
    if (valorSelecionado === "" || tarefa.importancia === valorSelecionado) {
      const li = document.createElement("li");
     li.textContent = `Tarefa: ${tarefa.tarefa}, Descrição: ${tarefa.descricao}, Data: ${tarefa.data}, Importância: ${tarefa.importancia}`;
      lista.appendChild(li);
    }
  });

  if (lista.innerHTML === "") {
    lista.innerHTML = "<li>Nenhuma tarefa encontrada.</li>";
  }
}
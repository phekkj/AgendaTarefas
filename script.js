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

function pesquisarTarefas() {
  const textoDigitado = document.getElementById("campoPesquisa").value.toLowerCase();
  const lista = document.getElementById("listaTarefas"); // Lista onde as tarefas vão aparecer
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];  // Pega as tarefas salvas no localStorage

  lista.innerHTML = ""; // Limpa a lista antes de exibir o resultado

  const tarefasFiltradas = tarefas.filter(tarefa =>
    tarefa.tarefa.toLowerCase().includes(textoDigitado) ||  // Verifica se o texto digitado está no nome da tarefa
    tarefa.descricao.toLowerCase().includes(textoDigitado) // Ou na descrição
  );

  if (tarefasFiltradas.length === 0) {
    lista.innerHTML = "<li>Nenhuma tarefa encontrada.</li>";
    return;
  }

    // Exibe as tarefas encontradas
    tarefasFiltradas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.textContent = `Tarefa: ${tarefa.tarefa}, Descrição: ${tarefa.descricao}, Data: ${tarefa.data}, Importância: ${tarefa.importancia}`;

    // Botão de excluir para cada tarefa
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btnExcluir";
    btnExcluir.onclick = function () {
      excluirTarefa(index);
    };

    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });

}
// Função para criar uma nova tarefa
function criarTarefa(){
  let tarefa = document.getElementById("nome").value;  // Pega o valor do campo nome
  let descricao = document.getElementById("descricao").value; // Descrição
  let data = document.getElementById("data").value; // Data 
  let importancia = document.getElementById("importancia").value; // Importância

  let novaTarefa ={   // Cria um objeto com os dados da nova tarefa
    tarefa: tarefa,
    descricao: descricao,
    data: data,
    importancia: importancia
  };

  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; // Pega todas as tarefas salvas ou cria uma lista vazia
  
  if (!tarefa || !descricao || !data || !importancia) {   // Validação: verifica se algum campo ficou vazio
    alert("Por favor, preencha todos os campos.");
    return; 
  }
  tarefas.push(novaTarefa); //Adiciona
  localStorage.setItem("tarefas", JSON.stringify(tarefas)); // Salva tudo no localStorage
  alert("Tarefa criada com sucesso!");
  
  //limpa dps de salvar
  document.getElementById("nome").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("data").value = "";
  document.getElementById("importancia").value = "";

}


// Função para exibir as tarefas criadas
function tarefashoje(){
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; // Pega as tarefas salvas
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
       
    
    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btnExcluir";
    btnExcluir.onclick = function() {
      excluirTarefa(index);
    };

    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
  ; 
}
function excluirTarefa(index) {
  let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.splice(index, 1); // Remove 1 tarefa na posição index
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  tarefashoje(); // Atualiza a lista na tela
}

function filtrarTarefas() {
  const select = document.querySelector("#filtroImportancia");// Pega o select
  const valorSelecionado = select.value;// Valor do select
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  tarefas.forEach((tarefa) => {
    // Se o filtro estiver vazio (mostrar todas) ou for igual à importância da tarefa
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
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
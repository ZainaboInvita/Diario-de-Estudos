function adicionarTarefa() {

  let texto = document.getElementById("texto").value;
  let prioridade = document.getElementById("prioridade").value;

  if (texto === "") return;

  let listaPendentes = document.getElementById("pendentes");

  // criar item
  let item = document.createElement("li");
  item.classList.add("item");



// ⭐ ADICIONE ISTO
item.classList.add(prioridade);

  // botão de check
  let check = document.createElement("input");
  check.type = "checkbox";

  // texto
  let span = document.createElement("span");
  span.textContent = texto + " (" + prioridade + ")";

  // botão apagar
  let apagar = document.createElement("button");
  apagar.textContent = "🗑️";
  apagar.classList.add("apagar");

  item.appendChild(check);
  item.appendChild(span);
  item.appendChild(apagar);

  listaPendentes.appendChild(item);

  document.getElementById("texto").value = "";

  atualizarContagem();

  // quando marcar como concluída
  check.addEventListener("change", function () {

    if (check.checked) {
      document.getElementById("concluidas").appendChild(item);
    } else {
      document.getElementById("pendentes").appendChild(item);
    }

    atualizarContagem();
  });

  // apagar tarefa
  apagar.addEventListener("click", function () {
    item.remove();
    atualizarContagem();
  });
}

function atualizarContagem() {

  let pendentes = document.getElementById("pendentes").children.length;
  let concluidas = document.getElementById("concluidas").children.length;
  let total = pendentes + concluidas;

  // atualizar números dos cards
  document.getElementById("total").textContent = total;
  document.getElementById("pendentesCount").textContent = pendentes;
  document.getElementById("concluidasCount").textContent = concluidas;

  // atualizar títulos
  document.getElementById("pendentesTitulo").textContent =
    "Pendentes (" + pendentes + ")";

  document.getElementById("concluidasTitulo").textContent =
    "Concluídas (" + concluidas + ")";

  // progresso
  let percent = total === 0 ? 0 : Math.round((concluidas / total) * 100);

  document.getElementById("percentagem").textContent = percent + "%";
  document.getElementById("barraInterna").style.width = percent + "%";
}


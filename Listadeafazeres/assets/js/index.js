$(document).ready(function() {
    const novaTarefaInput = $("#novaTarefaInput");
    const listaTarefas = $("#listaTarefas");
    const listaConcluidas = $("#listaConcluidas");

    function obterTarefas() {
        return JSON.parse(localStorage.getItem("tarefas")) || [];
    }

    function salvarTarefas(tarefas) {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }

    function renderizarTarefas() {
        const tarefas = obterTarefas();
        listaTarefas.empty();
        listaConcluidas.empty();
        $.each(tarefas, function(index, tarefa) {
            const itemLista = $("<div></div>").text(tarefa.nome);
            itemLista.addClass("m-1 p-1 border");
            if (tarefa.concluida) {
                itemLista.addClass("text-decoration-line-through text-muted");
                listaConcluidas.append(itemLista);
            } else {
                const botaoRemover = $("<button>Remover</button>");
                botaoRemover.addClass("btn btn-danger btn-sm m-1");
                botaoRemover.click(function() {
                    tarefas.splice(index, 1);
                    salvarTarefas(tarefas);
                    renderizarTarefas();
                });
                const botaoConcluir = $("<button>Concluir</button>");
                botaoConcluir.addClass("btn btn-success btn-sm m-1 ");
                botaoConcluir.click(function() {
                    tarefa.concluida = true;
                    salvarTarefas(tarefas);
                    renderizarTarefas();
                });
                itemLista.append(botaoRemover);
                itemLista.append(botaoConcluir);
                listaTarefas.append(itemLista);
            }
        });
    }

    $("#btnAdicionar").click(function() {
        const nomeTarefa = novaTarefaInput.val().trim();
        if (nomeTarefa !== "") {
            const tarefas = obterTarefas();
            tarefas.push({ nome: nomeTarefa, concluida: false });
            salvarTarefas(tarefas);
            renderizarTarefas();
            novaTarefaInput.val("");
        } else {
            alert("Por favor, insira uma tarefa válida.");
        }
    });

    renderizarTarefas();
});
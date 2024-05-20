document.addEventListener("DOMContentLoaded", function () {
    let data = [];

    // Corrija o caminho para o arquivo JSON
    fetch('json/data.json')
        .then(res => res.json())
        .then(jsonData => {
            data = jsonData;
            displaytela(data);
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});

function displaytela(items) {
    let mostrartela = document.getElementById("displaytela");
    let div = document.createElement('div');
    div.className = "row";
    items.forEach((item, index) => {
        let maximoCaracteres = 90; 
        let descricaoLimitada = item.Desc.length > maximoCaracteres 
                                ? item.Desc.substring(0, maximoCaracteres) + "..." 
                                : item.Desc;
        let card = document.createElement('div');
        card.className = "col-12 col-md-3 p-0 m-0";

        card.innerHTML = `
            <div class="card m-1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${item.id}">
                <img src="${item.imgsrc}" class="card-img-top border" id="img200px">
                <div class="card-body p-1">
                    <p><b>Personagem:</b><br>${item.nome}</p>
                    <p><b>Desc</b>:<br>${descricaoLimitada}</p>
                    <span class="badge rounded-pill text-bg-danger mb-2">${item.Rpg}</span>
                </div>
            </div>`;
        
        div.appendChild(card);
    });

    mostrartela.appendChild(div);

    // Evento para atualizar o modal
    document.getElementById('exampleModal').addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget; // Botão que acionou o modal
        var id = button.getAttribute('data-id'); // Extrai informação do atributo data-id
        var selectedItem = items.find(item => item.id == id); // Encontra o item com base no ID
        var modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = ''; // Limpa o conteúdo anterior

        // Adiciona imagem e informações do personagem ao modal
        modalBody.innerHTML = `
            <div class="card m-1">
            <div class="row">
            <div class="col-4">
                <img src="${selectedItem.imgsrc}" class="card-img-top border" id="modalImg">
                </div>
                <div class="col-8">
                    <p><b>Personagem:</b>${selectedItem.nome}</p>
                    <p><b>Descrição</b>:<br>${selectedItem.Desc}</p>
                </div>
                <div class="col-12">
                    <span class="badge rounded-pill text-bg-danger mb-2">${selectedItem.Rpg}</span>
                    <h4>Atributos</h4>
                    ${Object.entries(selectedItem.atributos).map(([atributo, valor]) => `<p><b>${atributo.charAt(0).toUpperCase() + atributo.slice(1)}</b>: ${valor}</p>`).join('')}
                
            </div>`;
    });
}

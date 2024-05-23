document.addEventListener("DOMContentLoaded", function () {
    let data = [];

    // Corrija o caminho para o arquivo JSON
    fetch('http://localhost:3000/personagens')
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
    div.className = "row"; // Classe de linha do Bootstrap para alinhamento horizontal

    items.forEach((item) => {
        let maximoCaracteres = 90; 
        let descricaoLimitada = item.Desc.length > maximoCaracteres 
                                ? item.Desc.substring(0, maximoCaracteres) + "..." 
                                : item.Desc;

        let card = document.createElement('div');
        card.className = "col-12 col-md-3 p-1"; // Classe de coluna do Bootstrap para responsividade

        card.innerHTML = `
            <div class="card h-100">
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
}

function leDados(){
    let strDados = localStorage.getItem('bd');
    let objDados = {}; 

    if(strDados){
        objDados = JSON.parse(strDados);
    }
    else{
        objDados = { "listas":
            [
               { afazer : "comida"}
            ]
        }
    }
    return objDados;
}

function salvaDados(dados){
    localStorage.setItem('bd', JSON.stringify(dados));
}

function incluirDados(){
    let objDados = leDados();

    let elem = document.getElementById('elem').value;
    let novoelem = {
        afazer: elem 
    };
    objDados.listas.push(novoelem);
    salvaDados(objDados);
}

function imprimirdados(){
    let tela = document.getElementById('listaAfazeres');
    let strhtml = '';
    let objDados = leDados(); 
    for(let i = 0; i < objDados.listas.length; i++){
        strhtml += `<p>${objDados.listas[i].afazer}</p>`;
    }
    tela.innerHTML = strhtml;
}
function removerdados(){
    let objDados = leDados();

    let elem = document.getElementById('elem').value;
    let novoelem = {
        afazer: elem 
    };
    objDados.listas.pop();
    salvaDados(objDados);
}
function incluirEImprimirDados(){
    incluirDados();
    imprimirdados();
}
function removerEImprimirDados(){
    removerdados();
    imprimirdados();
}
// Configura os botões 
document.getElementById('btnadd').addEventListener('click', incluirEImprimirDados);

document.getElementById('btnremove').addEventListener('click', removerEImprimirDados);
imprimirdados();

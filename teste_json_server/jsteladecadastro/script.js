document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('selet').addEventListener('change', function(){
        var atributosDiv = document.getElementById('atributos');
        var valorSelecionado = parseInt(this.value); // Convertendo o valor para um número inteiro

        // Limpa os atributos anteriores ao alterar a seleção
        atributosDiv.innerHTML = '';

        console.log('valor selecionado: ' + valorSelecionado);

        if(valorSelecionado === 2) { // Se o valor selecionado for 2 (Bokas)
            // Adiciona os atributos específicos para o RPG "Bokas"
            var atributosBokas = `
                <input type="text" id="atributo1" class="form-control m-1">
                <input type="text" id="atributo2" class="form-control m-1">
                <input type="text" id="atributo3" class="form-control m-1">`;

            // Adiciona os atributos específicos ao div de atributos
            atributosDiv.innerHTML = atributosBokas;
        }
    });
});

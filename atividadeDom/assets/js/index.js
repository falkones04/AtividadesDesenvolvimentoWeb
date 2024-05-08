$(document).ready(function() {
    $('#btnConverter').click(function() {
        // Pegando o valor do campo de entrada
        var meuCampo = $('#valor').val();
        
        // Verificando se o valor do campo é um número
        if (!isNaN(meuCampo)) {
            // Convertendo os valores para números inteiros
            var valor1 = parseFloat(meuCampo);
            var meuCampo2 = parseFloat($('#select1').val());
            var meuCampo3 = parseFloat($('#select2').val());
            
            // Matriz de conversão entre diferentes moedas
            var conversor = [
                [1, 5.07, 0.93, 0.000016, 6.60], // Dólar
                [0.2, 1, 0.18, 0.0000031, 1.31], // Real
                [1.07, 5.45, 1,0.000017, 7.12], // Euro
                [62637.80, 317868.04, 58319.89, 1, 409055.81], // Bitcoin
                [0.15, 0.77, 0.14, 0.00000241, 1] // Doge
            ];

            // Realizando o cálculo de conversão usando switch
            var resultado;
            switch (meuCampo2) {
                case 0: // Dólar
                    resultado = valor1 * conversor[meuCampo2][meuCampo3];
                    break;
                case 1: // Real
                    resultado = valor1 * conversor[meuCampo2][meuCampo3];
                    break;
                case 2: // Euro
                    resultado = valor1 * conversor[meuCampo2][meuCampo3];
                    break;
                case 3: // Bitcoin
                    resultado = valor1 * conversor[meuCampo2][meuCampo3];
                
                    break;
                case 4: // Dogecoin
                    resultado = valor1 * conversor[meuCampo2][meuCampo3];
                    break;
            }

            // Exibindo o resultado no elemento <a>
            var moeda;
            switch (meuCampo3) {
                case 0:
                    moeda = "$";
                    break;
                case 1:
                    moeda = "R$";
                    break;
                case 2:
                    moeda = "€";
                    break;
                case 3:
                    moeda = "BTC";
                    break;
                case 4:
                    moeda = "DOGE";
                    break;
            }
            $('#resposta').text("Resultado: " + moeda + " " + resultado);
        } else {
            console.log("Por favor, insira um valor numérico válido.");
        }
    });
});


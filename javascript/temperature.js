/* Isso obtém o elemento HTML com o ID "button" e armazena na variável button.*/
let buttonTemperature = document.getElementById("button-temperature");

/* Isso adiciona um ouvinte de evento ao botão, que é acionado quando o botão é clicado.*/
buttonTemperature.addEventListener("click", function () {

    /*Exibe uma caixa de diálogo de entrada, o valor inserido é armazenado na variável number. */
    let number = Number.parseFloat(prompt("Digite uma temperatura em °C (Celsius)"));

    if (!isNaN(number)) { /*Isso verifica se o valor inserido (number) não é um NaN (não é um número).*/
        let fahrenheit = number * 1.8 + 32;
        let kelvin = number + 273.15;

        /*Isso cria uma string (resultado) que contém informações sobre a conversão da distância para diferentes unidades.*/
        document.getElementById("output-numberTemperature").innerText = number;
        document.getElementById("fahrenheit-result").innerText = fahrenheit.toFixed(2);
        document.getElementById("kelvin-result").innerText = kelvin.toFixed(2);
    } else {
        alert("Por favor, insira um valor numérico válido.");
    }
});

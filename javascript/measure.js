/* Isso obtém o elemento HTML com o ID "button" e armazena na variável button.*/
let buttonMeasure = document.getElementById("button-measure");

/* Isso adiciona um ouvinte de evento ao botão, que é acionado quando o botão é clicado.*/
buttonMeasure.addEventListener("click", function () {
    /*Exibe uma caixa de diálogo de entrada, o valor inserido é armazenado na variável number. */
    let number = prompt("Digite a distância em metros (m):");

    if (!isNaN(number)) { /*Isso verifica se o valor inserido (number) não é um NaN (não é um número).*/
        let kilometer = number / 1000;
        let hectometer = number / 100;
        let decameter = number / 10;
        let decimeter = number * 10;
        let centimeter = number * 100;
        let millimeter = number * 1000;

        document.getElementById("output-numberMeters").innerText = number;
        document.getElementById("km-result").innerText = kilometer.toFixed(2);
        document.getElementById("hm-result").innerText = hectometer.toFixed(2);
        document.getElementById("dam-result").innerText = decameter.toFixed(2);
        document.getElementById("dm-result").innerText = decimeter.toFixed(2);
        document.getElementById("cm-result").innerText = centimeter.toFixed(2);
        document.getElementById("mm-result").innerText = millimeter.toFixed(2);

    } else {
        alert("Por favor, insira um valor numérico válido.");
    }
});
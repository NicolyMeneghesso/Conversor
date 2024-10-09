/* Obtem o valor do input do real */
function getRealValue() {
    let real = document.getElementById("input-real").value;
    return Number.parseFloat(real); // Converte o valor para float
}

/* Converter para Dólar */
let button1 = document.getElementById("button_dolar");

button1.addEventListener("click", function () {
    let real = getRealValue(); // Pega o valor de real do input
    
    if (!isNaN(real)) { // Verifica se o valor de real é válido
        let dolar = Number.parseFloat(prompt("Quanto está a cotação do dólar agora?"));
        let result = '';

        if (!isNaN(dolar)) { // Verifica se a cotação do dólar é válida
            let convert1 = real / dolar;
            if (convert1 >= 0) {
                let formattedValue = convert1.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
                result = 'Você terá na cotação atual do Dólar: ' + formattedValue;
            }
            document.getElementById("output").innerText = result;
        } else {
            alert("Por favor, insira um valor numérico válido para o dólar.");
        }
    } else {
        alert("Por favor, insira um valor numérico válido para o real.");
    }
});

/* Converter para Euro */
let button2 = document.getElementById("button_euro");

button2.addEventListener("click", function () {
    let real = getRealValue(); // Pega o valor de real do input

    if (!isNaN(real)) { // Verifica se o valor de real é válido
        let euro = Number.parseFloat(prompt("Quanto está a cotação do euro agora?"));
        let result = '';

        if (!isNaN(euro)) { // Verifica se a cotação do euro é válida
            let convert2 = real / euro;
            if (convert2 >= 0) {
                let formattedValueEuro = convert2.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
                result = 'Você terá na cotação atual do Euro: ' + formattedValueEuro;
            }
            document.getElementById("output").innerText = result;
        } else {
            alert("Por favor, insira um valor numérico válido para o euro.");
        }
    } else {
        alert("Por favor, insira um valor numérico válido para o real.");
    }
});

/* Converter para Yen */
let button3 = document.getElementById("button_yen");

button3.addEventListener("click", function () {
    let real = getRealValue(); // Pega o valor de real do input

    if (!isNaN(real)) { // Verifica se o valor de real é válido
        let yen = Number.parseFloat(prompt("Quanto está a cotação do Yen agora?"));
        let result = '';

        if (!isNaN(yen)) { // Verifica se a cotação do yen é válida
            let convert3 = real * yen;
            if (convert3 >= 0) {
                let formattedValueYen = convert3.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
                result = 'Você terá na cotação atual do Yen: ' + formattedValueYen;
            }
            document.getElementById("output").innerText = result;
        } else {
            alert("Por favor, insira um valor numérico válido para o yen.");
        }
    } else {
        alert("Por favor, insira um valor numérico válido para o real.");
    }
});

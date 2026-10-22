const botao = document.getElementById("converter");

botao.addEventListener("click", function() {

    const temperatura = Number(
        document.getElementById("temperatura").value
    );

    const resultado = (temperatura * 9 / 5) + 32;

    document.getElementById("resultado").innerHTML =
        "Temperatura em Fahrenheit: " + resultado;

});
document.getElementById('calcular').addEventListener('click', function() {
    // Pegar os valores inseridos pelo usuário
    var nome = document.getElementById('nome').value;
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Exibir o resultado na caixa result
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = nome + ", seu IMC é: " + imc.toFixed(2);

    // Adicionar class de acordo com o resultado do IMC
    if (imc < 18.5) {
        resultado.className = 'result baixo';
    } else if (imc >= 18.5 && imc < 25) {
        resultado.className = 'result normal';
    } else if (imc >= 25 && imc < 30) {
        resultado.className = 'result sobrepeso';
    } else {
        resultado.className = 'result obeso';
    }
});

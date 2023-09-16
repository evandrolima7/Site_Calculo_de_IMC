function Calcular() {
    // Obtendo os elementos do formulário pelo ID
    var tpeso = document.getElementById('txtpeso');
    var taltura = document.getElementById('txtaltura');
    var nome = document.getElementById('txtnome');
    var res = document.getElementById('res');
    
    // Convertendo os valores para números
    var peso = Number(tpeso.value);
    var altura = Number(taltura.value);
    
    // Verificando se o nome foi digitado
    if (!nome.value) {
        window.alert('Digite o seu nome');
        return; // Sair da função se o nome não foi inserido
    } else if (!peso) {
        window.alert('Digite o seu peso!');
        return; // Sair da função se o peso não foi inserido ou é zero
    } else if (!altura) {
        window.alert('Digite sua altura!');
        return; // Sair da função se a altura não foi inserida ou é zero
    }
    
    // Calculando o IMC
    var imc = peso / (altura * altura);
    
    // Verificando o resultado do IMC
    if (imc <= 18.5) {
        res.innerHTML = `${nome.value}, o seu IMC é ${imc.toFixed(2)}, portanto você está abaixo do peso!`;
    } else if (imc <= 24.9) {
        res.innerHTML = `${nome.value}, o seu IMC é ${imc.toFixed(2)}, portanto você está no seu peso ideal.`;
    } else if (imc <= 29.9) {
        res.innerHTML = `${nome.value}, o seu IMC é ${imc.toFixed(2)}, portanto você está com sobrepeso!`; 
    } else if (imc <= 34.9) {
        res.innerHTML = `${nome.value}, o seu IMC é ${imc.toFixed(2)}, portanto você está com Obesidade Grau I.`;
    } else if (imc <= 39.9) {
        res.innerHTML = `${nome.value}, o seu IMC é ${imc.toFixed(2)}, portanto você está com Obesidade Grau II!`;
    } else {
        res.innerHTML = `${nome.value}, o seu IMC é ${imc.toFixed(2)}, portanto você está com Obesidade Grau III (obesidade mórbida)!`;
    }
}
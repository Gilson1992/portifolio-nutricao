
// Modificando o titulo principal do HTML com o DOM
var titulo = document.querySelector(".titulo1");
titulo.textContent = "Portifólio Nutrição";

// Fazendo os cauculos em IMC dos pacientes com DOM

// Calculando o paciente 1 (Paulo)
var pacientes = document.querySelectorAll(".paciente");



for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var imc = peso / (altura * altura)

    var imc = tdimc.textContent = imc

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdimc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");


    } else if (!alturaEhValida) {
        alturaEhValida = false;
        tdimc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");

    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;
    };

}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
};

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
};

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}













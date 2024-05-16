let inputAdultos = document.getElementById("qtd_adultos");
let inputCriancas = document.getElementById("qtd_criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

let divBotoesCalculo = document.getElementById("botoes");
let divBotoesPosCalculo = document.getElementById("botoes-pos-calculo");

let divResultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = calculaCarne(duracao);
    let linguica = calculaLinguica(duracao);
    let paoDeAlho = calculaPaoDeAlho(duracao);
    let cerveja = calculaCerveja(duracao);
    let bebida = calculaBebida(duracao);

    let qtdTotalCarne = carne * adultos + (calculaCarne(duracao) / 2 * criancas);
    let qtdTotalLinguica = linguica * adultos + (calculaLinguica(duracao) / 2 * criancas);
    let qtdTotalPao = paoDeAlho * adultos + (calculaPaoDeAlho(duracao) / 2 * criancas);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebidas = bebida * adultos + (calculaBebida(duracao) / 2 * criancas);

    if (adultos == '' && criancas == '' && duracao == '') {

        alert("Preencha os campos!");
        return;
    }

    if (adultos == '' || criancas == '' || duracao == '') {

        alert("Preencha os campos!");
        return;
    }

    if (divResultado) {

    }

    escondeBotoesCalculo();

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg. de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalLinguica / 1000} Kg. de Linguiça</p>`
    resultado.innerHTML += `<p>${qtdTotalPao / 1000} Kg. de Pães de alho</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de 2L</p>`

    mostrarBotoesPosCalculo();

}

function calculaCarne(duracao) {

    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function calculaLinguica(duracao) {

    if (duracao >= 6) {
        return 400;
    } else {
        return 200;
    }

}

function calculaPaoDeAlho(duracao) {

    if (duracao >= 6) {
        return 200;
    } else {
        return 80;
    }

}

function calculaCerveja(duracao) {

    if (duracao >= 6) {
        return 1600;
    } else {
        return 800;
    }

}

function calculaBebida(duracao) {

    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }

}

function limpaCampos() {

    inputAdultos.value = '';
    inputCriancas.value = '';
    inputDuracao.value = '';

    escondeResultado();
    mostrarBotoesCalculo();
    escondeBotoesPosCalculo();
}

function escondeBotoesCalculo() {

    divBotoesCalculo.style.display = "none";
}

function mostrarBotoesCalculo() {

    divBotoesCalculo.style.display = "inline-block";
}

function escondeBotoesPosCalculo() {

    divBotoesPosCalculo.style.display = "none";
}

function mostrarBotoesPosCalculo() {

    divBotoesPosCalculo.style.display = "block";
}

function escondeResultado() {

    divResultado.innerHTML = '';
}
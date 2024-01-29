// Titulo da página metodo não agil
// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Jogo do número secreto';

// Paragrafo da página metodo não agil
// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = 'Escolha um número de 1 a 10'

let numeroSecreto = gerarNumeroAleatorio();
function gerarNumeroAleatorio () {
    return parseInt(Math.random() *10 + 1);
}
let tentativas = 1;

// Valores do titulo e paragrafo
function valor (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    valor ('h1', 'Jogo do numero secreto');
    valor ('p', 'Escolha um número de 1 a 10');
}
exibirMensagemInicial();

// Botão 1 
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('O botão foi clicado')
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;
        valor('h1', 'Você descobriu o numero secreto');
        valor('p', mensagemTentativas);
        document.getElementById('reiniciarJogo').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            valor('p', 'O número secreto e menor ');
        } else {
            valor('p', 'O valor do número secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}
function botaoReiniciarJogo() {
    console.log('O botão foi clicado')
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciarJogo').setAttribute('disabled', true);
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


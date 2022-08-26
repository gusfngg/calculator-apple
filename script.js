let elemtentoResultado = document.querySelector('.js-resultado')
let botoesPadroes = document.querySelectorAll('.js-btn-padroes')
let botaoResultado= document.querySelector('.js-btn-igual')
let botaoAc = document.querySelector('.js-btn-ac')
let botaoMaisMenos = document.querySelector('.js-btn-mais-menos')
let botaoDeletar = document.querySelector('.js-btn-del')

function adicionarElementoInputResultado(numerodigitado) {
    elemtentoResultado.value += numerodigitado
}


function executarcalculo () {
    elemtentoResultado.value = eval(elemtentoResultado.value);
}

function limparResultado () {
    elemtentoResultado.value = ''
} 

function trocarSinalDaconta () {
    if(Number(elemtentoResultado.value)) {
    elemtentoResultado.value = elemtentoResultado.value * -1
    } 
}

function deletarUltimaLetraDoResultado () {
    elemtentoResultado.value = elemtentoResultado.value.slice(0, -1);
}


function gerenciarEscutadores() {
    botoesPadroes.forEach((elemtentoCorrente) => {
        elemtentoCorrente.addEventListener('click', () => {
            let valorDoElementoclicado = elemtentoCorrente.dataset.valor;
            adicionarElementoInputResultado(valorDoElementoclicado);
        })
    })
    
    
    botaoResultado.addEventListener('click', () => {
        executarcalculo();
    })
    
    botaoAc.addEventListener('click', () => {
        limparResultado();
    })
    
    botaoMaisMenos.addEventListener('click', () => {
        trocarSinalDaconta();
    })
    
    botaoDeletar.addEventListener('click', () => {
        deletarUltimaLetraDoResultado();
    })
}

gerenciarEscutadores()
// Controles de timer

function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoInterval() {
    console.log(mostraHora());
}

// setInterval chama uma funcao em intervalos especificados
// Comumente, nao criamos uma funçao inteira para passar como parametro
// usamos funçoes anonimas (lambda no python)
// funcao anonima em JS = function () {}
// unica diferença e que ela nao tem nome e ai passamos ela direto no parametro
// setInterval(funcaoDoInterval, 1000);
// os intervalos sao em miliseconds
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// Podemos colocar a funcao de setInterval em uma variavel e usar outra funcao para
// para a execucao
// setTimeOut chama uma funcao na quantidade de tempo (miliseconds) definido
// A funçao clearInterval ela faz parar o setInterval
setTimeout(function () {
    clearInterval(timer);
}, 5000);
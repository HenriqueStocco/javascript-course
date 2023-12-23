function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // if(typeof msg !== 'string'){
        //     reject('CAI NO ERRO');
        //     return;
        // }

        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
        return;
    });
}

// Metodos de Promises
// Como estamos usando setTimeOut para 'esperar' a resoluçao, mesmo que ele me entregue a promise, ele continua executando em memoria o resto das promises, apenas nao me entrega os resultados

// Promise.all() recebe um array e retorna esse array resolvido podemos passar valores resolvidos ja, ex: const valor1 = Promise.resolve(1); e se ocorrer um erro em qualquer valor da promise ela ira retornar o erro apenas

// Promise.race() me entrega a primeira promise que resolver so que se nao for uma promise, ele sempre vai me entregar esse valor como no exemplo abaixo, 'Primeiro valor' nao e uma promise, e nao importa onde ela esteja como exemplo 'Outro valor', ela vai me entregar esse dado que nao e uma promise e tambem, se houver um erro, o erro e apresentado e a promise para

// Promise.resolve() me entrega a promise ja resolvida

// Promise.reject() cai direto no .catch() e me entrega o erro definido

const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 3)),
    esperaAi('Promise 3', rand(1, 3)),
    // Vai me apresentar um erro pois nao e uma string, mas como esta dentro do setTimeOut, a promise vai apresentar o erro se o tempo de execuçao da mesma for o menor dentre todas as outras promises
    esperaAi(1000, rand(1, 3)),
    // 'Outro valor'
];

Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));
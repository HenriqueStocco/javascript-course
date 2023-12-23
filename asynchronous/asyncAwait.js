function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Quanto mais resolves colocarmos, mais verboso e comprido fica o codigo
// esperaAi('Fase 1', rand())
//     .then((valor) => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na se fase:', fase);
//     })
//     .catch(e => console.log(e));

// Para resolver isso, usamos funcao assincrona
// e para casos onde pode haver um erro, apenas jogamos dentro de um try catch para tratar e apresentar o erro
// Promises possuem 3 estados
// 1 - Pendente(<Pending>) -> Estado inicial da promise, quando mando ela executar, apresenta um erro quando a execucao e direta sem esperar ela ser resolvida
// 2 - <fullfilled> -> promise resolvida
// 3 - <rejected> -> promise rejeitada
async function executa() {
    try {
        // exemplo de pending
        const fase1 = esperaAi('Fase 1', 1000);
        console.log(fase1);

        // Tentando receber a entrega da promise fase1
        setTimeout(function() {
            console.log('Essa promise estava pendente', fase1);
        }, 1100);

        const fase2 = await esperaAi(2, rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);

    } catch(e) {
        console.log(e);
    }
    
}
executa();

// Se tentar executar a promise sem o .then(), tambem caimos no <pending> porque a promise estava executando ainda e ela nao esperou esse tempo e ai para resolver, podemos usar o .then() ou criar uma async function para resolver a promise
const teste2 = esperaAi('qlq', 5000);
console.log(teste2);
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// A utilizaçao de promises e justamente para
// deixar o codigo mais limpo e correto
// Funçoes de callbacks sao uteis mas sao gambiarras que
// encadeiam muitas funçoes, igual uma arvore de natal
// As promises vao diminuir isso
// Em promises temos dois parametros
// resolve -> executa uma açao que eu defino se o codigo estiver correto
// reject -> executa uma açao que eu defino se o codigo estiver errado
// Promises podem resolver e rejeitar coisas 
// para resolver a promise usamos .then() na chamada da funcao
// e para rejeitar a promise, logo depois do .then usamos .catch() 
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // o reject vai mostrar o erro e ai vamos tratar ele
        // Se der erro, voce pode apresentar oque quiser pra indicar o erro
        // Mas ele vai interromper os processos seguintes
        if(typeof msg !== 'string') reject(new Error());

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// Posso colocar uma promise dentro de um then -> que e a promise
// e dentro do then chamamos a funçao que cria a promise e passamos os
// parametros que vao ser executados depois e retornamos a resposta
esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Eu serei o ultimo a ser exibido.');
    })
    .catch(e => {
        console.log('Erro: ', e);
    });

// Promises executam em paralelo ao codigo
// Isso quer dizer que elas so vao começar seu show
// depois que tudo que esta no seu codigo terminar de executar
// Elas sao como os processos menos importantes de um computador
// Que pausam sua execuçao para começar outra de mais importancia
// mas no caso elas so executam depois de tudo
console.log('Sera executado antes de qualquer promise');
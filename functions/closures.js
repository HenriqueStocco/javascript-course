// Closures sao quando se muda os valores da funcao principal na secudanria
// e quando a secundaria lemmbra do escopo lexico da primaria
// tendo 3 escopos
// 1 -> funcao principal, 2 -> funcao secundaria, 3 -> global

function retornaFuncao (nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');
console.log(funcao(), funcao2());
console.log(funcao, funcao2);
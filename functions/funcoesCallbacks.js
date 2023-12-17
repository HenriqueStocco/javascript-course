// Funçoes de Callback
// Sao funcoes que sao executas quando uma açao finaliza, quando essa outra e executada
// Funcao que voce chama quando outra termina

// Essa funcao gera um numero aleatorio entre 1000 e 3000
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// Essas funcoes abaixo sao chamadas em ordem
// onde mesmo que o tempo de chamada do setTimeout seja aleatorio
// as funcoes sao sempre chamadas em ordem f1, f2, f3 e Hello World!
function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('Hello World!');
}

f1();
f2();
f3();
// console.log('Hello World!');
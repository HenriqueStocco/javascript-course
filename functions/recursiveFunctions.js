// Funçoes recursivas
// Sao funcoes que se chama, ela mesma se chama
// Cuidado com a quantidade de recursividade
// Muita recursao faz o motor do js parar elas quando chegar no limite padrao

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * (factorial(number -1));
    }
}

// console.log(factorial(4));

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(-10);
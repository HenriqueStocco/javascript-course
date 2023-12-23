try {
    // E executado quando nao ha erros
} catch (e) {
    // E executado quando ha erros
} finally {
    // E sempre executado
}

// instanceof verifica se algo que voce esta passando e uma instancia do objeto comparado
// Nesse caso abaixo, esta verificando se data nao e uma instancia do objeto Date se nao for, apresenta o erro ...

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch (err) {
    // Tratar erro
    console.log(err);
} finally {
    console.log('Tenha um bom dia!');
}
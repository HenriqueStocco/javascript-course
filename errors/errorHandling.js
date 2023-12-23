// try {
// console.log(x);
// }
// // catch igual except 
// catch(err) {
//     console.log('Variavel nao existe', err.x);
// }

// Como em todas as linguagens, nunca exibir esse erro para os usuarios


function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ) {
        // throw e igual raise no python
        // new e uma funcao construtora, ela cria um novo objeto de classe
        // e esse throw new Error ira afetar o catch, ira aparecer o erro com o nome
        // que definimos na funcao contrutora new Error
        throw new ReferenceError('x e y precisam ser numbers');
    }

    return x + y;
}
try {
    console.log(soma(1, 3));
    console.log(soma('1', 3));
} catch (error) {
    console.log(error);
}
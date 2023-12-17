// Funçoes geradoras
// Sao funçoes que possuem um recurso que elas vao quase que pausar o codigo em 
// determinado local
// ex: uma funçao que a cada chamada me entregue um valor de 1-3
// 1a chamada -> 1
// 2a chamada -> 2
// 3a chamada -> 3
// se eu colocar so g1 ela me mostra a funcao, o que ela e
// console.log(g1);
// para ela me entregar um valor e necessario o .next()
// e o .value para mostrar o valor
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// Esse objeto possue o value e done
// value -> e o valor que definido na funçao
// done -> e uma verificacao se ja terminou de gerar 
// Se nao terminou done: false
// So ira retornar done: true quando nao houver mais coisas para gerar

function* geradoraUm() {
    // Codigo qualquer
    yield 'Valor 1';
    // Codigo qualquer
    yield 'Valor 2';
    // Codigo qualquer
    yield 'Valor 3';
}

const g1 = geradoraUm();
// Posso iterar a funcao
for (let valor of g1) {
    console.log(valor);
}

// Gerador infinito
function* infinityGen() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

// const iG = infinityGen();
// console.log(iG.next().value);
// console.log(iG.next().value);
// console.log(iG.next().value);
// console.log(iG.next().value);
// console.log(iG.next().value);
// console.log(iG.next().value);
// console.log(iG.next().value);
// console.log(iG.next().value);

// Funcao geradora que delega tarefa para outra geradora
function* servo() {
    yield 0;
    yield 1;
    yield 2;
}

function* mestre() {
    // delegando os geradores para o servo gerar
    yield* servo();
    yield 3;
    yield 4;
    yield 5;
}

// const m = mestre();
// for (let valor of m) {
//     console.log(valor);
// }

// Sistema onde uma funcao executada uma tarefa e outra funcao executa outra tarefa
function* tarefa1() {
    yield function() {
        console.log('Vim do y1');
    };
    
    // Se eu colocar um return, ela impede que a geradora continue
    // finalizando o codigo
    // JS nao deixa nem salvar kkkk
    return function() {
        console.log('Vim do return');
    };

    // yield function() {
    //     console.log('Vim do y2');
    // };
}

const t1 = tarefa1();
// Chama a primeira gearadora
const func1 = t1.next().value;
// Chama a segunda gearadora
const func2 = t1.next().value;
func1();
func2();
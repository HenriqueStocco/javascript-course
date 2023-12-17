// Funçoes imediatas ou
// IIFE -> Immediatly Invoked Expression
// Sao funçoes que sao meio que enapsuladas
// Funcoes e qualquer coisa que estiver dentro dela, sao protegidas do escopo 
// glogal e que sao iniciadas imediatamente

// Consigo passar parametros para a funcao
// os parametros nao sao obrigatorios
(function(idade, peso, altura) {
    // const nome = 'Luiz';
    // console.log(nome)
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    // imprimindo no termial os valores dos parametros
    console.log(idade, peso, altura);

    // passando valores para os parametros
})(18, 80, 1.70);

// const nome = 'Qualquer coisa';
// console.log(nome);
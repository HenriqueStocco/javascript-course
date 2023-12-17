// Funcao construtora retorna objetos assim como a funcao fabrica
// A diferença e que as funcoes construtoras ela cria o objeto, retorna o objeto
// a funcao fabrica so retorna um objeto
// Na funcao construtora sempre criamos o nome com a letra MAIUSCULA
// ex: Pessoa(new) tipo classes em python3
// essa diferença faz com que tudo que eu criar dentro dela ja e um objeto
// e para criar cada objeto e necessario usar a key new

function Pessoa(nome, sobrenome) {
    // posso criar atributos que nao podem ser acessados fora da funcao
    // com const
    // privada
    const id = 123456;
    // Posso criar metodos que nao podem ser acessados fora da funcao
    // privada
    const metodoInterno = function() {};

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo.');
    };
}

// A palavra new cria um objeto vazio e faz o this apontar para os atributos 
// definidos
const pessoa1 = new Pessoa('Luiz', 'Otavio');
const pessoa2 = new Pessoa('Maria', 'Oliveira');
console.log(pessoa1.nome + '\n' + pessoa1.sobrenome);
pessoa2.metodo();
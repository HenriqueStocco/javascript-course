// Funçoes Fabricas sao funçoes que retornam um objeto
// Factory Functions
// Bem parecida com POO em Python3
// a key this referencia o objeto, a funcao, a classe e ...
// this e parecido com self em python3
// toFixed define apenas duas casas decimais em floats
// E, assim como o @property de python3 em classes, onde conseguimos 
// transformar um metedo em atributo na sua chamada
// podemos usar a key get para fazer a mesma coisa, mas em funçoes
// Entao o metodo imc finge ser um atributo, e eu nao posso usar os ()
// ira dar erro
// resumindo ele e um getter
// e podemos mudar o imc utilizando um setter

function criaPessoa(nome, sobrenome, altura, peso) {
    return{
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            // split separa com algo definido, no caso um espaço, os valores de 
            // uma string e coloca dentro de uma array
            valor = valor.split(' ');
            // shift pega o primeiro elemento de uma array e retorna ele
            // no caso esta retornando ele em this.nome
            this.nome = valor.shift();
            // join junta todos os elementos de uma array e retorna ele
            this.sobrenome = valor.join(' ');
        },

        // funcao anonima
        fala(assunto = 'falando sobre JS.') {
            // nome nao precisa de this pq esta acima da funcao
            // como se ela ja tivesse recebido um valor
            // Caso eu queira usar o setter para mudar o valor passado no param
            // precisaria usar o this, pq ele referencia a funcao principal
            // e como ela esta sendo alterada com o setter, ele nao vai 
            // acompanhar essa redefiniçao sem o this
            return `${this.nome} esta ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.80, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 60);
console.log(p1.fala('falando sobre JS'));
console.log(p1.imc);
console.log(p2.fala('falando sobre Carrossel'));
console.log(p2.imc);

// Com o setter eu posso redefinir os atributos passados para p1 ecima
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.fala());
// Classes em JS sao a mesma coisa que funçoes construtoras
// Funcionam da mesma forma, o que muda e o nome class
// Em classes, os metodos ja sao linkados automaticamente em prototypes

class Pessoa {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    falar() {
        console.log(`${this.name} esta falando.`);
    }

    // comer() {
    //     console.log(`${this.name} esta comendo.`);
    // }

    // beber() {
    //     console.log(`${this.name} esta bebendo.`);
    // }
}

// Comparando com Constructor Function
function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} esta falando.`);
};

const p1 = new Pessoa('Luiz', 20);
const p2 = new Pessoa2('Maria', 44);
// console.log(p1.name);
// console.log(p1.age);
console.log(p1.falar());
console.log(p2.falar());
// console.log(p1.comer());
// console.log(p1.beber());

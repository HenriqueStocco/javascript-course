/*
Henrique Stocco tem 20 anos, pesa 65 kg
tem 1.6 de altura e seu IMC é de 23.888888
Henrique Stocco nasceu em 2003
*/
const nome = 'Henrique';
const sobrenome = 'Stocco';
const idade = 20;
const peso = 65;
const alturaEmM = 1.65; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;


// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
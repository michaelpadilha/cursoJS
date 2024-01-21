/*
Michael Padilha tem 27 anos, pesa 78 kg tem 1.75 de altura e seu IMC é de ...
Michael Padilha nasceu em ...
*/

const nome = 'Michael'
const sobrenome = 'Padilha'
let idade = 28;
let peso = 78;
const alturaEmM = 1.75;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
const anoAtual = 2024;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);

// Template string
console.log(`${nome} nasceu em ${anoNascimento}`);
